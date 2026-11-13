import { RowField } from "@/components/editor/RowField";
import { getRowSections } from "@/lib/diagram/getRowSections";
import styles from "@/styles/editor/ItemRows.module.css";
import type { ItemRowsProps } from "@/types/components/ItemRowsProps";

export function ItemRows({ rows, rules, editing }: ItemRowsProps) {
  if (rows.length === 0) return null;
  const sections = getRowSections(rows, rules);
  const hasMethods = sections.includes("methods");

  return (
    <div className={styles.rows}>
      {rows.map((row, rowIndex) => {
        const description = rules.describeRow(row.text);
        return (
          <RowField
            key={row.id}
            variant="row"
            value={row.text}
            placeholder={rules.rowPlaceholder}
            shouldFocus={editing.shouldFocusField(row.id)}
            parts={description.parts}
            section={sections[rowIndex]}
            marker={rules.kind === "er" ? description.marker : undefined}
            onChange={(text) => editing.setRowText(row.id, text)}
            onEnter={(input) => editing.handleRowEnter(row, rowIndex, input)}
            onBackspaceWhenEmpty={() => editing.handleRowBackspace(row, rowIndex)}
            onFocus={() => editing.setFocusedFieldId(row.id)}
          />
        );
      })}
      {hasMethods && <div className={styles.divider} />}
    </div>
  );
}
