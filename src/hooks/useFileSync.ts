import { useEffect, useState } from "react";
import { DiagramFileSync } from "@/lib/saving/DiagramFileSync";
import { makeDiagramFileText } from "@/lib/saving/makeDiagramFileText";
import { showContinueAddress } from "@/lib/saving/showContinueAddress";
import type { DiagramContent } from "@/types/diagram/DiagramContent";
import type { DiagramSession } from "@/types/saving/DiagramSession";
import type { SyncState } from "@/types/saving/SyncState";

export function useFileSync(
  session: DiagramSession,
  content: DiagramContent,
  replaceContent: (content: DiagramContent) => void,
) {
  const [syncState, setSyncState] = useState<SyncState>({
    status: session.fileHandle ? "saved" : "unsynced",
    fileName: session.fileHandle?.name ?? "",
  });
  const [fileSync] = useState(
    () => new DiagramFileSync(session, { onStateChange: setSyncState, onReload: replaceContent }),
  );
  const text = makeDiagramFileText(session.kind, content);

  useEffect(() => {
    fileSync.start();
    return () => fileSync.stop();
  }, [fileSync]);

  useEffect(() => {
    fileSync.updateText(text);
  }, [fileSync, text]);

  useEffect(() => {
    if (syncState.fileName) showContinueAddress(session.kind);
  }, [session.kind, syncState.fileName]);

  return { syncState, fileSync };
}
