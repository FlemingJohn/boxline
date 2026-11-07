import type { ItemRow } from "@/types/diagram/ItemRow";

export function getFinishedRows(rows: ItemRow[]): ItemRow[] {
  return rows.filter((row) => row.text.trim() !== "");
}
