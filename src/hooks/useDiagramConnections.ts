import { useEdgesState } from "@xyflow/react";
import { defaultConnectionData } from "@/lib/diagram/defaultConnectionData";
import { flipConnection } from "@/lib/diagram/flipConnection";
import { hasConnectionBetween } from "@/lib/diagram/hasConnectionBetween";
import { makeNewConnection } from "@/lib/diagram/makeNewConnection";
import type { ConnectionData } from "@/types/diagram/ConnectionData";
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

  const updateConnection = (connectionId: string, changes: Partial<ConnectionData>) => {
    setConnections((currentConnections) =>
      currentConnections.map((connection) =>
        connection.id === connectionId
          ? { ...connection, data: { ...(connection.data ?? defaultConnectionData), ...changes } }
          : connection,
      ),
    );
  };

  const flipConnectionById = (connectionId: string) => {
    setConnections((currentConnections) =>
      currentConnections.map((connection) => (connection.id === connectionId ? flipConnection(connection) : connection)),
    );
  };

  return {
    connections,
    handleConnectionsChange,
    addConnection,
    updateConnection,
    flipConnection: flipConnectionById,
    replaceConnections: setConnections,
  };
}
