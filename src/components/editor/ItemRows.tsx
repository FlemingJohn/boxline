import { RowField } from "@/components/editor/RowField";
import styles from "@/styles/editor/ItemRows.module.css";
import type { ItemRowsProps } from "@/types/components/ItemRowsProps";

export function ItemRows({ rows, placeholder, editing }: ItemRowsProps) {
  if (rows.length === 0) return null;

  return (
    <div className={styles.rows}>
      {rows.map((row, rowIndex) => (
        <RowField
          key={row.id}
          variant="row"
          value={row.text}
          placeholder={placeholder}
          shouldFocus={editing.shouldFocusField(row.id)}
          onChange={(text) => editing.setRowText(row.id, text)}
          onEnter={(input) => editing.handleRowEnter(row, rowIndex, input)}
          onBackspaceWhenEmpty={() => editing.handleRowBackspace(row, rowIndex)}
          onFocus={() => editing.setFocusedFieldId(row.id)}
        />
      ))}
    </div>
  );
}
