import type { DiagramKind } from "@/types/diagram/DiagramKind";

export type DiagramRules = {
  kind: DiagramKind;
  label: string;
  defaultFileName: string;
  itemNamePlaceholder: string;
  rowPlaceholder: string;
};
