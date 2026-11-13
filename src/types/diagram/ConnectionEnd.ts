import type { Position } from "@xyflow/react";
import type { ItemRectangle } from "@/types/diagram/ItemRectangle";

export type ConnectionEnd = {
  connectionId: string;
  isSource: boolean;
  side: Position;
  item: ItemRectangle;
  otherItem: ItemRectangle;
};
