import { getConnectionEnds } from "@/lib/diagram/getConnectionEnds";
import { getLaneShifts } from "@/lib/diagram/getLaneShifts";
import { getRectangleAt } from "@/lib/diagram/getRectangleAt";
import { makeRoute } from "@/lib/diagram/makeRoute";
import { getEndKey, placeConnectionEnds } from "@/lib/diagram/placeConnectionEnds";
import type { ConnectionRoute } from "@/types/diagram/ConnectionRoute";
import type { DiagramConnection } from "@/types/diagram/DiagramConnection";
import type { DiagramItem } from "@/types/diagram/DiagramItem";

export function getConnectionRoutes(items: DiagramItem[], connections: DiagramConnection[]): Map<string, ConnectionRoute> {
  const rectangles = new Map(
    items.filter((item) => item.measured?.width).map((item) => [item.id, getRectangleAt(item.position, item.measured ?? {})]),
  );
  const ends = getConnectionEnds(connections, rectangles);
  const placedEnds = placeConnectionEnds(ends);
  const laneShifts = getLaneShifts(ends);
  const routes = new Map<string, ConnectionRoute>();
  for (const sourceEnd of ends.filter((end) => end.isSource)) {
    const source = placedEnds.get(getEndKey(sourceEnd.connectionId, true));
    const target = placedEnds.get(getEndKey(sourceEnd.connectionId, false));
    if (source && target) routes.set(sourceEnd.connectionId, makeRoute(sourceEnd, source, target, laneShifts.get(sourceEnd.connectionId) ?? 0));
  }
  return routes;
}
