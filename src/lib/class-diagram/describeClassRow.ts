import { getClassRowParts } from "@/lib/class-diagram/getClassRowParts";
import type { RowDescription } from "@/types/diagram/RowDescription";

export function describeClassRow(text: string): RowDescription {
  return {
    section: text.includes("(") ? "methods" : "attributes",
    parts: getClassRowParts(text),
    marker: null,
  };
}
