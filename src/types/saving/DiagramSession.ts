import type { DiagramContent } from "@/types/diagram/DiagramContent";
import type { DiagramKind } from "@/types/diagram/DiagramKind";

export type DiagramSession = {
  kind: DiagramKind;
  fileHandle: FileSystemFileHandle | null;
  content: DiagramContent;
  syncedText: string;
  stamp: string;
};
