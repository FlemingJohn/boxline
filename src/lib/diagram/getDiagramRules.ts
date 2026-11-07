import { classDiagramRules } from "@/lib/class-diagram/classDiagramRules";
import { erDiagramRules } from "@/lib/er-diagram/erDiagramRules";
import type { DiagramKind } from "@/types/diagram/DiagramKind";
import type { DiagramRules } from "@/types/diagram/DiagramRules";

export function getDiagramRules(kind: DiagramKind): DiagramRules {
  return kind === "class" ? classDiagramRules : erDiagramRules;
}
