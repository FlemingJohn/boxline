import { defaultConnectionData } from "@/lib/diagram/defaultConnectionData";
import type { DiagramConnection } from "@/types/diagram/DiagramConnection";

export function flipConnection(connection: DiagramConnection): DiagramConnection {
  const data = connection.data ?? defaultConnectionData;
  return {
    ...connection,
    source: connection.target,
    target: connection.source,
    data: {
      ...data,
      startLabel: data.endLabel,
      endLabel: data.startLabel,
      startEnd: data.endEnd,
      endEnd: data.startEnd,
    },
  };
}
