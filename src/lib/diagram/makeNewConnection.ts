import { defaultConnectionData } from "@/lib/diagram/defaultConnectionData";
import { makeId } from "@/lib/diagram/makeId";
import type { DiagramConnection } from "@/types/diagram/DiagramConnection";

export function makeNewConnection(sourceId: string, targetId: string): DiagramConnection {
  return { id: makeId(), type: "line", source: sourceId, target: targetId, data: defaultConnectionData };
}
