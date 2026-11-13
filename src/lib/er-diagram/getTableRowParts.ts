import type { RowPart } from "@/types/diagram/RowPart";

export function getTableRowParts(text: string): RowPart[] {
  let hasName = false;
  return text.split(/(\s+)/).filter((piece) => piece !== "").map((piece) => {
    if (/^\s+$/.test(piece)) return { text: piece, role: "plain" };
    const keyword = piece.toUpperCase();
    if (keyword === "PK") return { text: piece, role: "key" };
    if (keyword === "FK") return { text: piece, role: "foreign" };
    if (!hasName) {
      hasName = true;
      return { text: piece, role: "plain" };
    }
    return { text: piece, role: "type" };
  });
}
