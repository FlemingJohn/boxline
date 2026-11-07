import type { DiagramKind } from "@/types/diagram/DiagramKind";

export type DiagramRules = {
  kind: DiagramKind;
  label: string;
  itemNamePlaceholder: string;
  rowPlaceholder: string;
};
