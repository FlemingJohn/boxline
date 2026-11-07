import { createContext } from "react";
import { classDiagramRules } from "@/lib/class-diagram/classDiagramRules";
import type { DiagramRules } from "@/types/diagram/DiagramRules";

export const DiagramRulesContext = createContext<DiagramRules>(classDiagramRules);
