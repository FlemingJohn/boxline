import type { DiagramFileSync } from "@/lib/saving/DiagramFileSync";
import type { SyncState } from "@/types/saving/SyncState";

export type SyncStatusLabelProps = {
  syncState: SyncState;
  fileSync: DiagramFileSync;
};
