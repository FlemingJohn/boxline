import type { useItemEditing } from "@/hooks/useItemEditing";
import type { DiagramRules } from "@/types/diagram/DiagramRules";
import type { ItemRow } from "@/types/diagram/ItemRow";

export type ItemRowsProps = {
  rows: ItemRow[];
  rules: DiagramRules;
  editing: ReturnType<typeof useItemEditing>;
};
