import styles from "@/styles/editor/RowField.module.css";
import type { RowMirrorProps } from "@/types/components/RowMirrorProps";

export function RowMirror({ parts }: RowMirrorProps) {
  return (
    <span className={styles.mirror} aria-hidden="true">
      {parts.map((part, index) => (
        <span key={index} className={styles[part.role]}>
          {part.text}
        </span>
      ))}
    </span>
  );
}
