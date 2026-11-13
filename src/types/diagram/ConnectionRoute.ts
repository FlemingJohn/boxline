import type { Position } from "@xyflow/react";

export type ConnectionRoute = {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourcePosition: Position;
  targetPosition: Position;
  centerX?: number;
  centerY?: number;
};
