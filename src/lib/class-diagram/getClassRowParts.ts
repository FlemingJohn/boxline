import type { RowPart } from "@/types/diagram/RowPart";

const visibilitySymbols = ["+", "-", "#", "~"];

export function getClassRowParts(text: string): RowPart[] {
  const hasVisibility = visibilitySymbols.includes(text.charAt(0));
  const visibilityParts: RowPart[] = hasVisibility ? [{ text: text.charAt(0), role: "visibility" }] : [];
  const rest = hasVisibility ? text.slice(1) : text;
  const typeStart = rest.lastIndexOf(":");
  if (typeStart === -1) return [...visibilityParts, { text: rest, role: "plain" }];
  return [
    ...visibilityParts,
    { text: rest.slice(0, typeStart + 1), role: "plain" },
    { text: rest.slice(typeStart + 1), role: "type" },
  ];
}
