import { set } from "idb-keyval";
import { getBackupKey } from "@/lib/saving/getBackupKey";
import type { DiagramKind } from "@/types/diagram/DiagramKind";
import type { DiagramBackup } from "@/types/saving/DiagramBackup";

export function saveBackup(kind: DiagramKind, fileName: string, backup: DiagramBackup): Promise<void> {
  return set(getBackupKey(kind, fileName), backup);
}
