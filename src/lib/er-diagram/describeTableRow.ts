import { getTableRowParts } from "@/lib/er-diagram/getTableRowParts";
import type { RowDescription } from "@/types/diagram/RowDescription";
import type { RowMarker } from "@/types/diagram/RowMarker";

export function describeTableRow(text: string): RowDescription {
  const parts = getTableRowParts(text);
  const isPrimary = parts.some((part) => part.role === "key");
  const isForeign = parts.some((part) => part.role === "foreign");
  return { section: "attributes", parts, marker: getMarker(isPrimary, isForeign) };
}

function getMarker(isPrimary: boolean, isForeign: boolean): RowMarker | null {
  if (isPrimary && isForeign) return "primaryAndForeign";
  if (isPrimary) return "primary";
  return isForeign ? "foreign" : null;
}
