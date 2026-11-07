import type { OnEdgesChange, OnNodesChange, XYPosition } from "@xyflow/react";
import type { DiagramConnection } from "@/types/diagram/DiagramConnection";
import type { DiagramItem } from "@/types/diagram/DiagramItem";

export type DiagramCanvasProps = {
  items: DiagramItem[];
  connections: DiagramConnection[];
  onItemsChange: OnNodesChange<DiagramItem>;
  onConnectionsChange: OnEdgesChange<DiagramConnection>;
  onAddItem: (clickPosition: XYPosition) => DiagramItem;
  onAddConnection: (sourceId: string, targetId: string) => void;
};
