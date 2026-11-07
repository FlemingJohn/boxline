import type { DiagramKind } from "@/types/diagram/DiagramKind";
import type { SavedConnection } from "@/types/saving/SavedConnection";
import type { SavedItem } from "@/types/saving/SavedItem";

export type DiagramFile = {
  application: "boxline";
  version: 1;
  kind: DiagramKind;
  items: SavedItem[];
  connections: SavedConnection[];
};
