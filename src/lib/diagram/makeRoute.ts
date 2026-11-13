import { Position } from "@xyflow/react";
import type { ConnectionEnd } from "@/types/diagram/ConnectionEnd";
import type { ConnectionRoute } from "@/types/diagram/ConnectionRoute";
import type { PlacedEnd } from "@/types/diagram/PlacedEnd";

const edgeMargin = 8;

export function makeRoute(sourceEnd: ConnectionEnd, source: PlacedEnd, target: PlacedEnd, laneShift: number): ConnectionRoute {
  const isUpDown = sourceEnd.side === Position.Top || sourceEnd.side === Position.Bottom;
  const route: ConnectionRoute = {
    sourceX: source.x,
    sourceY: source.y,
    targetX: target.x,
    targetY: target.y,
    sourcePosition: sourceEnd.side,
    targetPosition: getOppositeSide(sourceEnd.side),
  };
  if (source.shareCount === 1 && target.shareCount === 1) return straightenWhenPossible(route, sourceEnd, isUpDown);
  const distance = isUpDown ? source.y - target.y : source.x - target.x;
  const halfGap = Math.abs(distance) / 2;
  const shift = Math.sign(distance) * Math.max(-halfGap + edgeMargin, Math.min(halfGap - edgeMargin, laneShift));
  return isUpDown
    ? { ...route, centerY: (source.y + target.y) / 2 + shift }
    : { ...route, centerX: (source.x + target.x) / 2 + shift };
}

function straightenWhenPossible(route: ConnectionRoute, end: ConnectionEnd, isUpDown: boolean): ConnectionRoute {
  const start = isUpDown ? Math.max(end.item.left, end.otherItem.left) : Math.max(end.item.top, end.otherItem.top);
  const finish = isUpDown ? Math.min(end.item.right, end.otherItem.right) : Math.min(end.item.bottom, end.otherItem.bottom);
  if (finish - start < edgeMargin * 2) return route;
  const middle = isUpDown ? (route.sourceX + route.targetX) / 2 : (route.sourceY + route.targetY) / 2;
  const shared = Math.max(start + edgeMargin, Math.min(finish - edgeMargin, middle));
  return isUpDown ? { ...route, sourceX: shared, targetX: shared } : { ...route, sourceY: shared, targetY: shared };
}

function getOppositeSide(side: Position): Position {
  if (side === Position.Top) return Position.Bottom;
  if (side === Position.Bottom) return Position.Top;
  return side === Position.Left ? Position.Right : Position.Left;
}
