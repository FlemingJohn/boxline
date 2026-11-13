import { describeClassRow } from "@/lib/class-diagram/describeClassRow";
import { getClassConnectionLook } from "@/lib/class-diagram/getClassConnectionLook";
import { isClassNameEmphasised } from "@/lib/class-diagram/isClassNameEmphasised";
import type { DiagramRules } from "@/types/diagram/DiagramRules";

export const classDiagramRules: DiagramRules = {
  kind: "class",
  label: "Class diagram",
  defaultFileName: "Untitled class diagram.boxline.json",
  itemNamePlaceholder: "Class name",
  rowPlaceholder: "+ name: string",
  describeRow: describeClassRow,
  isNameEmphasised: isClassNameEmphasised,
  getConnectionLook: getClassConnectionLook,
};
