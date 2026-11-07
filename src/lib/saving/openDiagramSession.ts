import { getBackup } from "@/lib/saving/getBackup";
import { getFileStamp } from "@/lib/saving/getFileStamp";
import { InvalidDiagramFileError } from "@/lib/saving/InvalidDiagramFileError";
import { makeDiagramFileText } from "@/lib/saving/makeDiagramFileText";
import { parseDiagramFile } from "@/lib/saving/parseDiagramFile";
import { readFileText } from "@/lib/saving/readFileText";
import { restoreContent } from "@/lib/saving/restoreContent";
import type { DiagramKind } from "@/types/diagram/DiagramKind";
import type { DiagramBackup } from "@/types/saving/DiagramBackup";
import type { DiagramSession } from "@/types/saving/DiagramSession";

export async function openDiagramSession(
  kind: DiagramKind,
  fileHandle: FileSystemFileHandle,
): Promise<DiagramSession> {
  const backup = await getBackup(kind, fileHandle.name);
  const backupSession = backup ? makeBackupSession(kind, fileHandle, backup) : null;
  try {
    const fileSession = await readFileSession(kind, fileHandle);
    return backupSession ?? fileSession;
  } catch (error) {
    const isFileMissing = error instanceof DOMException && error.name === "NotFoundError";
    if (isFileMissing && backupSession) return backupSession;
    throw error;
  }
}

async function readFileSession(kind: DiagramKind, fileHandle: FileSystemFileHandle): Promise<DiagramSession> {
  const file = parseDiagramFile(await readFileText(fileHandle), kind);
  if (!file) throw new InvalidDiagramFileError();
  const content = restoreContent(file);
  const stamp = await getFileStamp(fileHandle);
  return { kind, fileHandle, content, syncedText: makeDiagramFileText(kind, content), stamp };
}

function makeBackupSession(
  kind: DiagramKind,
  fileHandle: FileSystemFileHandle,
  backup: DiagramBackup,
): DiagramSession | null {
  const backupFile = parseDiagramFile(backup.text, kind);
  if (!backupFile) return null;
  const content = restoreContent(backupFile);
  return { kind, fileHandle, content, syncedText: backup.baseText, stamp: backup.baseStamp };
}
