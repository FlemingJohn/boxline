import { Position } from "@xyflow/react";
import type { LabelPlacement } from "@/types/diagram/LabelPlacement";

const distanceFromLine = 8;

export function getLabelPlacement(x: number, y: number, side: Position): LabelPlacement {
  if (side === Position.Left) return { x: x - distanceFromLine, y: y - 6, anchor: "end" };
  if (side === Position.Top) return { x: x + distanceFromLine, y: y - distanceFromLine, anchor: "start" };
  if (side === Position.Bottom) return { x: x + distanceFromLine, y: y + 16, anchor: "start" };
  return { x: x + distanceFromLine, y: y - 6, anchor: "start" };
}
