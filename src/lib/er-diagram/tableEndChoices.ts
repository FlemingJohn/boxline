import type { TableLineEnd } from "@/types/diagram/TableLineEnd";

export const tableEndChoices: { end: TableLineEnd; label: string }[] = [
  { end: "one", label: "Exactly one" },
  { end: "zeroOrOne", label: "Zero or one" },
  { end: "many", label: "One or many" },
  { end: "zeroOrMany", label: "Zero or many" },
];
