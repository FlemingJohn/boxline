import type { RowMarker } from "@/types/diagram/RowMarker";
import type { RowPart } from "@/types/diagram/RowPart";
import type { RowSection } from "@/types/diagram/RowSection";

export type RowFieldProps = {
  variant: "name" | "row";
  value: string;
  placeholder: string;
  shouldFocus: boolean;
  parts?: RowPart[];
  section?: RowSection;
  marker?: RowMarker | null;
  isEmphasised?: boolean;
  onChange: (value: string) => void;
  onEnter: (input: HTMLInputElement) => void;
  onBackspaceWhenEmpty?: () => void;
  onFocus: () => void;
};
