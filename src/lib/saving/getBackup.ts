import { get } from "idb-keyval";
import { getBackupKey } from "@/lib/saving/getBackupKey";
import type { DiagramKind } from "@/types/diagram/DiagramKind";
import type { DiagramBackup } from "@/types/saving/DiagramBackup";

export function getBackup(kind: DiagramKind, fileName: string): Promise<DiagramBackup | undefined> {
  return get<DiagramBackup>(getBackupKey(kind, fileName));
}
