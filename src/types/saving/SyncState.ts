import type { SyncStatus } from "@/types/saving/SyncStatus";

export type SyncState = {
  status: SyncStatus;
  fileName: string;
};
