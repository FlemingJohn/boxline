import { Position } from "@xyflow/react";
import type { ItemRectangle } from "@/types/diagram/ItemRectangle";

const minimumSidewaysGap = 16;

export function getConnectionRoute(from: ItemRectangle, to: ItemRectangle) {
  if (to.left - from.right > minimumSidewaysGap) return getSidewaysRoute(from, to, from.right, to.left, Position.Right, Position.Left);
  if (from.left - to.right > minimumSidewaysGap) return getSidewaysRoute(from, to, from.left, to.right, Position.Left, Position.Right);
  if (to.top >= from.bottom) return getUpDownRoute(from, to, from.bottom, to.top, Position.Bottom, Position.Top);
  return getUpDownRoute(from, to, from.top, to.bottom, Position.Top, Position.Bottom);
}

function getSidewaysRoute(
  from: ItemRectangle,
  to: ItemRectangle,
  sourceX: number,
  targetX: number,
  sourcePosition: Position,
  targetPosition: Position,
) {
  const sourceY = (from.top + from.bottom) / 2;
  const targetY = (to.top + to.bottom) / 2;
  return { sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition };
}

function getUpDownRoute(
  from: ItemRectangle,
  to: ItemRectangle,
  sourceY: number,
  targetY: number,
  sourcePosition: Position,
  targetPosition: Position,
) {
  const sourceX = (from.left + from.right) / 2;
  const targetX = (to.left + to.right) / 2;
  return { sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition };
}
