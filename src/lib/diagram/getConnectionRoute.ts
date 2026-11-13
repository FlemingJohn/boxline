import { chooseConnectionSides } from "@/lib/diagram/chooseConnectionSides";
import { getSidePoint } from "@/lib/diagram/getSidePoint";
import type { ConnectionRoute } from "@/types/diagram/ConnectionRoute";
import type { ItemRectangle } from "@/types/diagram/ItemRectangle";

export function getConnectionRoute(from: ItemRectangle, to: ItemRectangle): ConnectionRoute {
  const sides = chooseConnectionSides(from, to);
  const source = getSidePoint(from, sides.sourcePosition, 0.5);
  const target = getSidePoint(to, sides.targetPosition, 0.5);
  return { sourceX: source.x, sourceY: source.y, targetX: target.x, targetY: target.y, ...sides };
}
