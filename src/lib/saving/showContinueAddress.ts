import type { DiagramKind } from "@/types/diagram/DiagramKind";

export function showContinueAddress(kind: DiagramKind): void {
  window.history.replaceState(null, "", `/editor/${kind}/continue`);
}
