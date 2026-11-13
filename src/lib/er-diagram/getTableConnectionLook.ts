import { tableEndMarkers } from "@/lib/er-diagram/tableEndMarkers";
import type { ConnectionData } from "@/types/diagram/ConnectionData";
import type { ConnectionLook } from "@/types/diagram/ConnectionLook";

export function getTableConnectionLook(data: ConnectionData): ConnectionLook {
  return { startMarker: tableEndMarkers[data.startEnd], endMarker: tableEndMarkers[data.endEnd], isDashed: false };
}
