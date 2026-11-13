import { markerIds } from "@/lib/diagram/markerIds";
import type { ClassLineType } from "@/types/diagram/ClassLineType";
import type { ConnectionLook } from "@/types/diagram/ConnectionLook";

export const classLineLooks: Record<ClassLineType, ConnectionLook> = {
  association: { startMarker: null, endMarker: null, isDashed: false },
  inheritance: { startMarker: null, endMarker: markerIds.triangle, isDashed: false },
  implementation: { startMarker: null, endMarker: markerIds.triangle, isDashed: true },
  dependency: { startMarker: null, endMarker: markerIds.openArrow, isDashed: true },
  aggregation: { startMarker: null, endMarker: markerIds.hollowDiamond, isDashed: false },
  composition: { startMarker: null, endMarker: markerIds.filledDiamond, isDashed: false },
};
