import type { DiagramKind } from "@/types/diagram/DiagramKind";

export type LastDiagram = {
  kind: DiagramKind;
  fileHandle: FileSystemFileHandle;
};
