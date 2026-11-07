import { emptyDiagramContent } from "@/lib/saving/emptyDiagramContent";
import { makeDiagramFileText } from "@/lib/saving/makeDiagramFileText";
import type { DiagramKind } from "@/types/diagram/DiagramKind";
import type { DiagramSession } from "@/types/saving/DiagramSession";

export function makeUnsavedSession(kind: DiagramKind): DiagramSession {
  return {
    kind,
    fileHandle: null,
    content: emptyDiagramContent,
    syncedText: makeDiagramFileText(kind, emptyDiagramContent),
    stamp: "",
  };
}
