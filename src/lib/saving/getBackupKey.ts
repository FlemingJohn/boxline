import type { DiagramKind } from "@/types/diagram/DiagramKind";

export function getBackupKey(kind: DiagramKind, fileName: string): string {
  return `backup:${kind}:${fileName}`;
}
