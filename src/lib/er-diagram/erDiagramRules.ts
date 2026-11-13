import { describeTableRow } from "@/lib/er-diagram/describeTableRow";
import { getSourceAboveTarget } from "@/lib/diagram/getSourceAboveTarget";
import { getTableConnectionLook } from "@/lib/er-diagram/getTableConnectionLook";
import type { DiagramRules } from "@/types/diagram/DiagramRules";

export const erDiagramRules: DiagramRules = {
  kind: "er",
  label: "ER diagram",
  defaultFileName: "Untitled ER diagram.boxline.json",
  itemNamePlaceholder: "Table name",
  rowPlaceholder: "column_name PK",
  describeRow: describeTableRow,
  isNameEmphasised: () => false,
  getConnectionLook: getTableConnectionLook,
  getUpperAndLowerIds: getSourceAboveTarget,
};
