import { chooseConnectionSides } from "@/lib/diagram/chooseConnectionSides";
import type { ConnectionEnd } from "@/types/diagram/ConnectionEnd";
import type { DiagramConnection } from "@/types/diagram/DiagramConnection";
import type { ItemRectangle } from "@/types/diagram/ItemRectangle";

export function getConnectionEnds(
  connections: DiagramConnection[],
  rectangles: Map<string, ItemRectangle>,
): ConnectionEnd[] {
  return connections.flatMap((connection) => {
    const source = rectangles.get(connection.source);
    const target = rectangles.get(connection.target);
    if (!source || !target) return [];
    const sides = chooseConnectionSides(source, target);
    return [
      { connectionId: connection.id, isSource: true, side: sides.sourcePosition, item: source, otherItem: target },
      { connectionId: connection.id, isSource: false, side: sides.targetPosition, item: target, otherItem: source },
    ];
  });
}
