import type { DiagramRules } from "@/types/diagram/DiagramRules";
import type { ItemRow } from "@/types/diagram/ItemRow";
import type { RowSection } from "@/types/diagram/RowSection";

export function getRowSections(rows: ItemRow[], rules: DiagramRules): RowSection[] {
  const sections: RowSection[] = [];
  for (const row of rows) {
    const previousSection = sections[sections.length - 1] ?? "attributes";
    sections.push(row.text.trim() === "" ? previousSection : rules.describeRow(row.text).section);
  }
  return sections;
}
