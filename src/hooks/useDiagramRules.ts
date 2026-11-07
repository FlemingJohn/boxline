import { useContext } from "react";
import { DiagramRulesContext } from "@/lib/diagram/DiagramRulesContext";

export function useDiagramRules() {
  return useContext(DiagramRulesContext);
}
