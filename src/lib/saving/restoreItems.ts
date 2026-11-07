import type { DiagramItem } from "@/types/diagram/DiagramItem";
import type { SavedItem } from "@/types/saving/SavedItem";

export function restoreItems(savedItems: SavedItem[]): DiagramItem[] {
  return savedItems.map((savedItem) => ({
    id: savedItem.id,
    type: "item",
    position: { x: savedItem.x, y: savedItem.y },
    data: { name: savedItem.name, rows: savedItem.rows, isNew: false },
  }));
}
