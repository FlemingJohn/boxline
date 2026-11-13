import type { ClassLineType } from "@/types/diagram/ClassLineType";

export const classLineChoices: { type: ClassLineType; label: string }[] = [
  { type: "association", label: "Association" },
  { type: "inheritance", label: "Inheritance" },
  { type: "implementation", label: "Implementation" },
  { type: "dependency", label: "Dependency" },
  { type: "aggregation", label: "Aggregation" },
  { type: "composition", label: "Composition" },
];
