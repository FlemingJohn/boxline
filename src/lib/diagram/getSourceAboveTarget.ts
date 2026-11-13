import type { DiagramConnection } from "@/types/diagram/DiagramConnection";

export function getSourceAboveTarget(connection: DiagramConnection): [string, string] {
  return [connection.source, connection.target];
}
