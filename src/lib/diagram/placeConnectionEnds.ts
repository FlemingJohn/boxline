import { Position } from "@xyflow/react";
import { getSidePoint } from "@/lib/diagram/getSidePoint";
import type { ConnectionEnd } from "@/types/diagram/ConnectionEnd";
import type { PlacedEnd } from "@/types/diagram/PlacedEnd";

export function placeConnectionEnds(ends: ConnectionEnd[]): Map<string, PlacedEnd> {
  const groups = new Map<string, ConnectionEnd[]>();
  for (const end of ends) {
    const groupKey = `${end.item.left}:${end.item.top}:${end.side}`;
    groups.set(groupKey, [...(groups.get(groupKey) ?? []), end]);
  }
  const placed = new Map<string, PlacedEnd>();
  for (const group of groups.values()) {
    const ordered = [...group].sort((first, second) => getOtherCentre(first) - getOtherCentre(second));
    ordered.forEach((end, index) => {
      const point = getSidePoint(end.item, end.side, (index + 1) / (ordered.length + 1));
      placed.set(getEndKey(end.connectionId, end.isSource), { ...point, shareCount: ordered.length });
    });
  }
  return placed;
}

export function getEndKey(connectionId: string, isSource: boolean): string {
  return `${connectionId}:${isSource ? "source" : "target"}`;
}

function getOtherCentre(end: ConnectionEnd): number {
  const isAcross = end.side === Position.Top || end.side === Position.Bottom;
  return isAcross ? (end.otherItem.left + end.otherItem.right) / 2 : (end.otherItem.top + end.otherItem.bottom) / 2;
}
