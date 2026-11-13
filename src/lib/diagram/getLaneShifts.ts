import { Position } from "@xyflow/react";
import type { ConnectionEnd } from "@/types/diagram/ConnectionEnd";

const laneGap = 10;

export function getLaneShifts(ends: ConnectionEnd[]): Map<string, number> {
  const groups = new Map<string, ConnectionEnd[]>();
  for (const end of ends.filter((candidate) => candidate.isSource)) {
    const groupKey = `${end.item.left}:${end.item.top}:${end.side}`;
    groups.set(groupKey, [...(groups.get(groupKey) ?? []), end]);
  }
  const shifts = new Map<string, number>();
  for (const group of groups.values()) {
    const ordered = [...group].sort((first, second) => getTravel(second) - getTravel(first));
    ordered.forEach((end, index) => shifts.set(end.connectionId, ((ordered.length - 1) / 2 - index) * laneGap));
  }
  return shifts;
}

function getTravel(end: ConnectionEnd): number {
  const isUpDown = end.side === Position.Top || end.side === Position.Bottom;
  const centre = (item: ConnectionEnd["item"]) =>
    isUpDown ? (item.left + item.right) / 2 : (item.top + item.bottom) / 2;
  return Math.abs(centre(end.otherItem) - centre(end.item));
}
