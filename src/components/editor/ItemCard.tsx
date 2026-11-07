import type { NodeProps } from "@xyflow/react";
import { ItemRows } from "@/components/editor/ItemRows";
import { RowField } from "@/components/editor/RowField";
import { Button } from "@/components/shared/Button";
import { useDiagramRules } from "@/hooks/useDiagramRules";
import { useItemEditing } from "@/hooks/useItemEditing";
import { nameFieldId } from "@/lib/diagram/nameFieldId";
import styles from "@/styles/editor/ItemCard.module.css";
import type { DiagramItem } from "@/types/diagram/DiagramItem";

export function ItemCard({ id, data, selected }: NodeProps<DiagramItem>) {
  const rules = useDiagramRules();
  const editing = useItemEditing(id, data);
  const selectedClass = selected ? styles.selected : "";

  return (
    <article className={`${styles.card} ${styles[rules.kind]} ${selectedClass}`} onBlur={editing.handleBlur}>
      <RowField
        variant="name"
        value={data.name}
        placeholder={rules.itemNamePlaceholder}
        shouldFocus={editing.shouldFocusField(nameFieldId)}
        onChange={editing.setName}
        onEnter={editing.handleNameEnter}
        onFocus={() => editing.setFocusedFieldId(nameFieldId)}
      />
      <ItemRows rows={data.rows} placeholder={rules.rowPlaceholder} editing={editing} />
      <div className={`${styles.removeHolder} nodrag`}>
        <Button variant="remove" label="Remove box" onClick={editing.removeItem}>×</Button>
      </div>
    </article>
  );
}
