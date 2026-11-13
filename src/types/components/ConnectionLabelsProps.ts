import type { Position } from "@xyflow/react";
import type { ConnectionData } from "@/types/diagram/ConnectionData";

export type ConnectionLabelsProps = {
  data: ConnectionData;
  route: {
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
    sourcePosition: Position;
    targetPosition: Position;
  };
  middleX: number;
  middleY: number;
};
