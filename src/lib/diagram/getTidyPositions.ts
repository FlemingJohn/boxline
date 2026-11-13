import dagre from "@dagrejs/dagre";
import type { XYPosition } from "@xyflow/react";
import type { DiagramConnection } from "@/types/diagram/DiagramConnection";
import type { DiagramItem } from "@/types/diagram/DiagramItem";
import type { TidyDirection } from "@/types/diagram/TidyDirection";

const fallbackWidth = 160;
const fallbackHeight = 60;

export function getTidyPositions(
  items: DiagramItem[],
  connections: DiagramConnection[],
  direction: TidyDirection,
): Map<string, XYPosition> {
  const graph = new dagre.graphlib.Graph();
  graph.setGraph({ rankdir: direction, nodesep: 60, ranksep: 90 });
  graph.setDefaultEdgeLabel(() => ({}));
  for (const item of items) {
    graph.setNode(item.id, { width: item.measured?.width ?? fallbackWidth, height: item.measured?.height ?? fallbackHeight });
  }
  for (const connection of connections) graph.setEdge(connection.source, connection.target);
  dagre.layout(graph);
  return new Map(
    items.map((item) => {
      const placed = graph.node(item.id);
      return [item.id, { x: placed.x - placed.width / 2, y: placed.y - placed.height / 2 }];
    }),
  );
}
