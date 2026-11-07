import type { useItemEditing } from "@/hooks/useItemEditing";
import type { ItemRow } from "@/types/diagram/ItemRow";

export type ItemRowsProps = {
  rows: ItemRow[];
  placeholder: string;
  editing: ReturnType<typeof useItemEditing>;
};
