import type { DiagramContent } from "@/types/diagram/DiagramContent";

export type SyncConflict = {
  content: DiagramContent;
  text: string;
  stamp: string;
};
