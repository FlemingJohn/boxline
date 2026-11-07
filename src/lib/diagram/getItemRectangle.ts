import type { InternalNode } from "@xyflow/react";
import type { ItemRectangle } from "@/types/diagram/ItemRectangle";

export function getItemRectangle(item: InternalNode): ItemRectangle {
  const { x, y } = item.internals.positionAbsolute;
  return {
    left: x,
    top: y,
    right: x + (item.measured.width ?? 0),
    bottom: y + (item.measured.height ?? 0),
  };
}
