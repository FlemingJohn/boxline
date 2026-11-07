import type { DiagramConnection } from "@/types/diagram/DiagramConnection";
import type { DiagramItem } from "@/types/diagram/DiagramItem";

export type DiagramContent = {
  items: DiagramItem[];
  connections: DiagramConnection[];
};
