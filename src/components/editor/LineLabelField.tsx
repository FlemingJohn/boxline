import styles from "@/styles/editor/ConnectionPanel.module.css";
import type { LineLabelFieldProps } from "@/types/components/LineLabelFieldProps";

export function LineLabelField({ label, value, placeholder, onChange }: LineLabelFieldProps) {
  return (
    <label className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      <input
        className={styles.fieldInput}
        type="text"
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
