import { Position } from "@xyflow/react";
import type { ConnectionSides } from "@/types/diagram/ConnectionSides";
import type { ItemRectangle } from "@/types/diagram/ItemRectangle";

const minimumUpDownGap = 24;
const minimumSidewaysGap = 16;

export function chooseConnectionSides(from: ItemRectangle, to: ItemRectangle): ConnectionSides {
  const gapBelow = to.top - from.bottom;
  const gapAbove = from.top - to.bottom;
  if (gapBelow >= minimumUpDownGap) return { sourcePosition: Position.Bottom, targetPosition: Position.Top };
  if (gapAbove >= minimumUpDownGap) return { sourcePosition: Position.Top, targetPosition: Position.Bottom };
  if (to.left - from.right > minimumSidewaysGap) return { sourcePosition: Position.Right, targetPosition: Position.Left };
  if (from.left - to.right > minimumSidewaysGap) return { sourcePosition: Position.Left, targetPosition: Position.Right };
  return gapBelow >= gapAbove
    ? { sourcePosition: Position.Bottom, targetPosition: Position.Top }
    : { sourcePosition: Position.Top, targetPosition: Position.Bottom };
}
