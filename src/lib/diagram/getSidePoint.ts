import { Position, type XYPosition } from "@xyflow/react";
import type { ItemRectangle } from "@/types/diagram/ItemRectangle";

export function getSidePoint(item: ItemRectangle, side: Position, share: number): XYPosition {
  const across = item.left + (item.right - item.left) * share;
  const down = item.top + (item.bottom - item.top) * share;
  if (side === Position.Top) return { x: across, y: item.top };
  if (side === Position.Bottom) return { x: across, y: item.bottom };
  if (side === Position.Left) return { x: item.left, y: down };
  return { x: item.right, y: down };
}
