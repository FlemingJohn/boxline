import { useEffect, useState } from "react";
import { isTextFieldFocused } from "@/lib/diagram/isTextFieldFocused";
import { UndoHistory } from "@/lib/history/UndoHistory";
import { parseDiagramFile } from "@/lib/saving/parseDiagramFile";
import { restoreContent } from "@/lib/saving/restoreContent";
import type { DiagramContent } from "@/types/diagram/DiagramContent";
import type { DiagramKind } from "@/types/diagram/DiagramKind";

export function useUndoHistory(kind: DiagramKind, text: string, replaceContent: (content: DiagramContent) => void) {
  const [, setVersion] = useState(0);
  const [history] = useState(() => {
    const restoreText = (savedText: string) => {
      const file = parseDiagramFile(savedText, kind);
      if (file) replaceContent(restoreContent(file));
    };
    return new UndoHistory(text, restoreText, () => setVersion((version) => version + 1));
  });

  useEffect(() => {
    history.record(text);
  }, [history, text]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const isShortcut = event.ctrlKey || event.metaKey;
      if (!isShortcut || isTextFieldFocused()) return;
      const key = event.key.toLowerCase();
      if (key === "z" && !event.shiftKey) history.undo();
      else if (key === "y" || (key === "z" && event.shiftKey)) history.redo();
      else return;
      event.preventDefault();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [history]);

  return history;
}
