import { restoreItems } from "@/lib/saving/restoreItems";
import type { DiagramContent } from "@/types/diagram/DiagramContent";
import type { DiagramFile } from "@/types/saving/DiagramFile";

export function restoreContent(file: DiagramFile): DiagramContent {
  const items = restoreItems(file.items);
  const itemIds = new Set(items.map((item) => item.id));
  const connections = file.connections
    .filter(({ from, to }) => itemIds.has(from) && itemIds.has(to))
    .map(({ id, from, to }) => ({ id, type: "line" as const, source: from, target: to }));
  return { items, connections };
}
