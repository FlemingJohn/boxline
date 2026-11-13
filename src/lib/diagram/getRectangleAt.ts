import type { XYPosition } from "@xyflow/react";
import type { ItemRectangle } from "@/types/diagram/ItemRectangle";

export function getRectangleAt(position: XYPosition, size: { width?: number; height?: number }): ItemRectangle {
  return {
    left: position.x,
    top: position.y,
    right: position.x + (size.width ?? 0),
    bottom: position.y + (size.height ?? 0),
  };
}
