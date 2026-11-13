import { LinePreview } from "@/components/editor/LinePreview";
import { ChoiceButton } from "@/components/shared/ChoiceButton";
import { tableEndChoices } from "@/lib/er-diagram/tableEndChoices";
import { tableEndMarkers } from "@/lib/er-diagram/tableEndMarkers";
import styles from "@/styles/editor/ConnectionPanel.module.css";
import type { TableEndChoicesProps } from "@/types/components/TableEndChoicesProps";

export function TableEndChoices({ label, chosenEnd, onChoose }: TableEndChoicesProps) {
  return (
    <div className={styles.group}>
      <span className={styles.fieldLabel}>{label}</span>
      <div className={styles.choices} role="group" aria-label={label}>
        {tableEndChoices.map((choice) => (
          <ChoiceButton key={choice.end} isChosen={chosenEnd === choice.end} onClick={() => onChoose(choice.end)}>
            <LinePreview look={{ startMarker: null, endMarker: tableEndMarkers[choice.end], isDashed: false }} />
            {choice.label}
          </ChoiceButton>
        ))}
      </div>
    </div>
  );
}
