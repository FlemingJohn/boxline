import { makeId } from "@/lib/diagram/makeId";
import type { ItemRow } from "@/types/diagram/ItemRow";

export function makeNewRow(): ItemRow {
  return { id: makeId(), text: "" };
}
