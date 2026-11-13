import { defaultConnectionData } from "@/lib/diagram/defaultConnectionData";
import { getFinishedRows } from "@/lib/diagram/getFinishedRows";
import type { DiagramContent } from "@/types/diagram/DiagramContent";
import type { DiagramItem } from "@/types/diagram/DiagramItem";
import type { DiagramKind } from "@/types/diagram/DiagramKind";
import type { DiagramFile } from "@/types/saving/DiagramFile";
import type { SavedItem } from "@/types/saving/SavedItem";

export function makeDiagramFileText(kind: DiagramKind, content: DiagramContent): string {
  const items = content.items.map(makeSavedItem).filter(hasContent);
  const savedIds = new Set(items.map((item) => item.id));
  const connections = content.connections
    .filter(({ source, target }) => savedIds.has(source) && savedIds.has(target))
    .map(({ id, source, target, data }) => ({ id, from: source, to: target, ...(data ?? defaultConnectionData) }));
  const file: DiagramFile = { application: "boxline", version: 1, kind, items, connections };
  return JSON.stringify(file, null, 2);
}

function makeSavedItem(item: DiagramItem): SavedItem {
  return {
    id: item.id,
    name: item.data.name,
    x: Math.round(item.position.x),
    y: Math.round(item.position.y),
    rows: getFinishedRows(item.data.rows),
  };
}

function hasContent(item: SavedItem): boolean {
  return item.name.trim() !== "" || item.rows.length > 0;
}
