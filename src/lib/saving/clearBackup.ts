import { del } from "idb-keyval";
import { getBackupKey } from "@/lib/saving/getBackupKey";
import type { DiagramKind } from "@/types/diagram/DiagramKind";

export function clearBackup(kind: DiagramKind, fileName: string): Promise<void> {
  return del(getBackupKey(kind, fileName));
}
