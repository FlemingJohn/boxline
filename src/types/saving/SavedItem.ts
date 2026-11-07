import type { ItemRow } from "@/types/diagram/ItemRow";

export type SavedItem = {
  id: string;
  name: string;
  x: number;
  y: number;
  rows: ItemRow[];
};
