import { readSavedConnectionData } from "@/lib/saving/readSavedConnectionData";
import { restoreItems } from "@/lib/saving/restoreItems";
import type { DiagramContent } from "@/types/diagram/DiagramContent";
import type { DiagramFile } from "@/types/saving/DiagramFile";

export function restoreContent(file: DiagramFile): DiagramContent {
  const items = restoreItems(file.items);
  const itemIds = new Set(items.map((item) => item.id));
  const connections = file.connections
    .filter(({ from, to }) => itemIds.has(from) && itemIds.has(to))
    .map((saved) => ({
      id: saved.id,
      type: "line" as const,
      source: saved.from,
      target: saved.to,
      data: readSavedConnectionData(saved),
    }));
  return { items, connections };
}
