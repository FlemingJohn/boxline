import type { ItemRow } from "@/types/diagram/ItemRow";

export type DiagramItemData = {
  name: string;
  rows: ItemRow[];
  isNew: boolean;
};
