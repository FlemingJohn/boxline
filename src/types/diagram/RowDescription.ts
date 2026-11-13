import type { RowMarker } from "@/types/diagram/RowMarker";
import type { RowPart } from "@/types/diagram/RowPart";
import type { RowSection } from "@/types/diagram/RowSection";

export type RowDescription = {
  section: RowSection;
  parts: RowPart[];
  marker: RowMarker | null;
};
