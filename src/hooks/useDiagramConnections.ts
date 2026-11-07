import { useEdgesState } from "@xyflow/react";
import { hasConnectionBetween } from "@/lib/diagram/hasConnectionBetween";
import { makeNewConnection } from "@/lib/diagram/makeNewConnection";
import type { DiagramConnection } from "@/types/diagram/DiagramConnection";

export function useDiagramConnections(initialConnections: DiagramConnection[]) {
  const [connections, setConnections, handleConnectionsChange] =
    useEdgesState<DiagramConnection>(initialConnections);

  const addConnection = (sourceId: string, targetId: string) => {
    setConnections((currentConnections) =>
      hasConnectionBetween(currentConnections, sourceId, targetId)
        ? currentConnections
        : [...currentConnections, makeNewConnection(sourceId, targetId)],
    );
  };

  return { connections, handleConnectionsChange, addConnection, replaceConnections: setConnections };
}
