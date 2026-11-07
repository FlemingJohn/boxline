import type { XYPosition } from "@xyflow/react";
import type { ItemRectangle } from "@/types/diagram/ItemRectangle";

const nearbyDistance = 16;

export function isPointNearItem(point: XYPosition, item: ItemRectangle): boolean {
  const isNearHorizontally = point.x >= item.left - nearbyDistance && point.x <= item.right + nearbyDistance;
  const isNearVertically = point.y >= item.top - nearbyDistance && point.y <= item.bottom + nearbyDistance;
  return isNearHorizontally && isNearVertically;
}
