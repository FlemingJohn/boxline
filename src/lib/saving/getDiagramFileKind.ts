import { parseDiagramFile } from "@/lib/saving/parseDiagramFile";
import type { DiagramKind } from "@/types/diagram/DiagramKind";

export function getDiagramFileKind(text: string): DiagramKind | null {
  if (parseDiagramFile(text, "class")) return "class";
  if (parseDiagramFile(text, "er")) return "er";
  return null;
}
