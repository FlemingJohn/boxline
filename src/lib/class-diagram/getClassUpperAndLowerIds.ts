import type { DiagramConnection } from "@/types/diagram/DiagramConnection";

const parentLineTypes = ["inheritance", "implementation"];

export function getClassUpperAndLowerIds(connection: DiagramConnection): [string, string] {
  const pointsToParent = parentLineTypes.includes(connection.data?.classLineType ?? "");
  return pointsToParent ? [connection.target, connection.source] : [connection.source, connection.target];
}
