import { isTextFieldFocused } from "@/lib/diagram/isTextFieldFocused";
import { getDiagramRules } from "@/lib/diagram/getDiagramRules";
import { chooseSaveLocation } from "@/lib/saving/chooseSaveLocation";
import { clearBackup } from "@/lib/saving/clearBackup";
import { ExclusiveTasks } from "@/lib/saving/ExclusiveTasks";
import { getFileStamp } from "@/lib/saving/getFileStamp";
import { getSyncStatusFromError } from "@/lib/saving/getSyncStatusFromError";
import { makeDiagramFileName } from "@/lib/saving/makeDiagramFileName";
import { makeDiagramFileText } from "@/lib/saving/makeDiagramFileText";
import { parseDiagramFile } from "@/lib/saving/parseDiagramFile";
import { readFileText } from "@/lib/saving/readFileText";
import { rememberLastDiagram } from "@/lib/saving/rememberLastDiagram";
import { removeReplacedFile } from "@/lib/saving/removeReplacedFile";
import { requestWriteAccess } from "@/lib/saving/requestWriteAccess";
import { restoreContent } from "@/lib/saving/restoreContent";
import { saveBackup } from "@/lib/saving/saveBackup";
import { writeFileText } from "@/lib/saving/writeFileText";
import type { DiagramContent } from "@/types/diagram/DiagramContent";
import type { DiagramKind } from "@/types/diagram/DiagramKind";
import type { DiagramSession } from "@/types/saving/DiagramSession";
import type { SyncConflict } from "@/types/saving/SyncConflict";
import type { SyncListeners } from "@/types/saving/SyncListeners";
import type { SyncStatus } from "@/types/saving/SyncStatus";

const saveDelay = 800;
const checkInterval = 2000;

export class DiagramFileSync {
  private kind: DiagramKind;
  private fileHandle: FileSystemFileHandle | null;
  private currentText: string;
  private syncedText: string;
  private stamp: string;
  private status: SyncStatus;
  private tasks = new ExclusiveTasks((error) => this.setStatus(getSyncStatusFromError(error)));
  private saveTimer: ReturnType<typeof setTimeout> | null = null;
  private checkTimer: ReturnType<typeof setInterval> | null = null;
  private conflict: SyncConflict | null = null;

  constructor(session: DiagramSession, private listeners: SyncListeners) {
    this.kind = session.kind;
    this.fileHandle = session.fileHandle;
    this.syncedText = session.syncedText;
    this.currentText = session.syncedText;
    this.stamp = session.stamp;
    this.status = session.fileHandle ? "saved" : "unsynced";
  }

  start() {
    this.checkTimer = setInterval(this.checkFile, checkInterval);
    window.addEventListener("focus", this.checkFile);
    window.addEventListener("beforeunload", this.warnBeforeLeaving);
  }

  stop() {
    if (this.checkTimer) clearInterval(this.checkTimer);
    window.removeEventListener("focus", this.checkFile);
    window.removeEventListener("beforeunload", this.warnBeforeLeaving);
    if (this.saveTimer) clearTimeout(this.saveTimer);
    if (this.saveTimer) void this.saveNow();
  }

  updateText(text: string) {
    this.currentText = text;
    if (!this.fileHandle || this.conflict) return;
    if (this.saveTimer) clearTimeout(this.saveTimer);
    this.saveTimer = null;
    if (!this.hasUnsavedChanges()) {
      if (this.status === "saving") this.setStatus("saved");
      return;
    }
    this.backUpCurrentText();
    this.setStatus("saving");
    this.saveTimer = setTimeout(this.saveNow, saveDelay);
  }

  hasUnsavedChanges() {
    return this.currentText !== this.syncedText;
  }

  saveNow = async () => {
    this.saveTimer = null;
    await this.tasks.runIfFree(async () => {
      if (!this.fileHandle || this.conflict || !this.hasUnsavedChanges()) return;
      const stamp = await getFileStamp(this.fileHandle);
      if (stamp !== this.stamp) await this.handleOutsideChange(stamp);
      if (stamp === this.stamp && this.hasUnsavedChanges()) await this.writeCurrentText();
    });
  };

  checkFile = async () => {
    await this.tasks.runIfFree(async () => {
      if (!this.fileHandle || this.conflict) return;
      const stamp = await getFileStamp(this.fileHandle);
      if (stamp !== this.stamp) await this.handleOutsideChange(stamp);
      const hasRecovered = stamp === this.stamp && !this.hasUnsavedChanges();
      if (hasRecovered && this.status !== "saved") this.setStatus("saved");
    });
    if (this.fileHandle && !this.conflict && this.hasUnsavedChanges() && !this.saveTimer) await this.saveNow();
  };

  keepMyVersion = async () => {
    this.conflict = null;
    await this.tasks.runAfterActiveTask(() => this.writeCurrentText());
  };

  takeFileVersion = () => {
    if (!this.conflict) return;
    const { content, text, stamp } = this.conflict;
    this.conflict = null;
    this.applyFileVersion(content, text, stamp);
  };

  allowAccess = async () => {
    if (!this.fileHandle) return;
    const isAllowed = await requestWriteAccess(this.fileHandle).catch(() => false);
    if (isAllowed) await this.tasks.runAfterActiveTask(() => this.writeCurrentText());
  };

  saveToNewFile = async () => {
    const suggestedName = this.fileHandle?.name ?? getDiagramRules(this.kind).defaultFileName;
    const newHandle = await chooseSaveLocation(suggestedName).catch(() => null);
    if (newHandle) await this.switchToFile(newHandle);
  };

  rename = async (newName: string) => {
    const previousHandle = this.fileHandle;
    const newFileName = makeDiagramFileName(newName);
    const newHandle = await chooseSaveLocation(newFileName, previousHandle).catch(() => null);
    if (!newHandle) return;
    await this.switchToFile(newHandle);
    if (previousHandle && this.status === "saved") await removeReplacedFile(previousHandle, newHandle);
  };

  private async switchToFile(newHandle: FileSystemFileHandle) {
    if (this.fileHandle) void clearBackup(this.kind, this.fileHandle.name).catch(() => undefined);
    this.conflict = null;
    this.fileHandle = newHandle;
    void rememberLastDiagram({ kind: this.kind, fileHandle: newHandle }).catch(() => undefined);
    await this.tasks.runAfterActiveTask(() => this.writeCurrentText());
  }

  private async handleOutsideChange(stamp: string) {
    if (!this.fileHandle) return;
    const file = parseDiagramFile(await readFileText(this.fileHandle), this.kind);
    if (!file) return this.setStatus("unreadable");
    const content = restoreContent(file);
    const text = makeDiagramFileText(this.kind, content);
    if (text === this.syncedText || text === this.currentText) {
      this.syncedText = text;
      this.stamp = stamp;
      return;
    }
    if (this.hasUnsavedChanges()) {
      this.conflict = { content, text, stamp };
      return this.setStatus("conflict");
    }
    if (!isTextFieldFocused()) this.applyFileVersion(content, text, stamp);
  }

  private applyFileVersion(content: DiagramContent, text: string, stamp: string) {
    this.syncedText = text;
    this.currentText = text;
    this.stamp = stamp;
    this.clearCurrentBackup();
    this.listeners.onReload(content);
    this.setStatus("saved");
  }

  private async writeCurrentText() {
    if (!this.fileHandle) return;
    const text = this.currentText;
    await writeFileText(this.fileHandle, text);
    this.stamp = await getFileStamp(this.fileHandle);
    this.syncedText = text;
    if (this.hasUnsavedChanges()) return this.setStatus("saving");
    this.clearCurrentBackup();
    this.setStatus("saved");
  }

  private backUpCurrentText() {
    if (!this.fileHandle) return;
    const backup = { text: this.currentText, baseText: this.syncedText, baseStamp: this.stamp };
    void saveBackup(this.kind, this.fileHandle.name, backup).catch(() => undefined);
  }

  private clearCurrentBackup() {
    if (this.fileHandle) void clearBackup(this.kind, this.fileHandle.name).catch(() => undefined);
  }

  private warnBeforeLeaving = (event: BeforeUnloadEvent) => {
    if (this.hasUnsavedChanges()) event.preventDefault();
  };

  private setStatus(status: SyncStatus) {
    this.status = status;
    this.listeners.onStateChange({ status, fileName: this.fileHandle?.name ?? "" });
  }
}
