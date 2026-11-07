import type { DiagramContent } from "@/types/diagram/DiagramContent";
import type { SyncState } from "@/types/saving/SyncState";

export type SyncListeners = {
  onStateChange: (state: SyncState) => void;
  onReload: (content: DiagramContent) => void;
};
