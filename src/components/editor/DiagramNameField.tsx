import { Check, Pencil } from "lucide-react";
import type { FocusEvent, KeyboardEvent } from "react";
import { Button } from "@/components/shared/Button";
import { Icon } from "@/components/shared/Icon";
import { Tooltip } from "@/components/shared/Tooltip";
import { useDiagramRename } from "@/hooks/useDiagramRename";
import styles from "@/styles/editor/DiagramNameField.module.css";
import type { DiagramNameFieldProps } from "@/types/components/DiagramNameFieldProps";

export function DiagramNameField({ name, onRename }: DiagramNameFieldProps) {
  const rename = useDiagramRename(name, onRename);

  const handleKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") rename.confirmName();
    if (event.key === "Escape") rename.cancelEditing();
  };

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    const nextFocus = event.relatedTarget;
    if (!(nextFocus instanceof Node && event.currentTarget.contains(nextFocus))) rename.cancelEditing();
  };

  if (!rename.isEditing) {
    return (
      <Tooltip text="Rename diagram" alignment="start">
        <Button variant="plain" onClick={rename.startEditing}><Icon shape={Pencil} />{name}</Button>
      </Tooltip>
    );
  }

  return (
    <span className={styles.editor} onBlur={handleBlur}>
      <input
        className={styles.input}
        value={rename.draftName}
        aria-label="Diagram name"
        autoFocus
        onChange={(event) => rename.setDraftName(event.target.value)}
        onKeyDown={handleKey}
        onFocus={(event) => event.target.select()}
      />
      <Button variant="primary" onClick={rename.confirmName}><Icon shape={Check} />Rename</Button>
    </span>
  );
}
