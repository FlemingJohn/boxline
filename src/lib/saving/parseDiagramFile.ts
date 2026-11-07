import type { DiagramKind } from "@/types/diagram/DiagramKind";
import type { DiagramFile } from "@/types/saving/DiagramFile";

export function parseDiagramFile(text: string, kind: DiagramKind): DiagramFile | null {
  try {
    const file = JSON.parse(text);
    const isDiagramFile = file?.application === "boxline" && file.version === 1 && file.kind === kind;
    if (!isDiagramFile || !Array.isArray(file.items) || !file.items.every(isSavedItem)) return null;
    const connections = file.connections ?? [];
    return Array.isArray(connections) && connections.every(isSavedConnection) ? { ...file, connections } : null;
  } catch {
    return null;
  }
}

function isSavedItem(item: Record<string, unknown>): boolean {
  const hasPosition = typeof item?.x === "number" && typeof item.y === "number";
  const hasText = typeof item?.id === "string" && typeof item.name === "string";
  return hasPosition && hasText && Array.isArray(item.rows) && item.rows.every(isSavedRow);
}

function isSavedRow(row: Record<string, unknown>): boolean {
  return typeof row?.id === "string" && typeof row.text === "string";
}

function isSavedConnection(connection: Record<string, unknown>): boolean {
  return ["id", "from", "to"].every((key) => typeof connection?.[key] === "string");
}
