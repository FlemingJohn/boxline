import { markerIds } from "@/lib/diagram/markerIds";
import type { TableLineEnd } from "@/types/diagram/TableLineEnd";

export const tableEndMarkers: Record<TableLineEnd, string> = {
  one: markerIds.one,
  zeroOrOne: markerIds.zeroOrOne,
  many: markerIds.many,
  zeroOrMany: markerIds.zeroOrMany,
};
