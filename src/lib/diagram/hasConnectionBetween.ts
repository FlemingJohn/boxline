import type { DiagramConnection } from "@/types/diagram/DiagramConnection";

export function hasConnectionBetween(
  connections: DiagramConnection[],
  firstId: string,
  secondId: string,
): boolean {
  return connections.some(
    ({ source, target }) =>
      (source === firstId && target === secondId) || (source === secondId && target === firstId),
  );
}
