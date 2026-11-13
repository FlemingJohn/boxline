import { X } from "lucide-react";
import styles from "@/styles/editor/ConnectionLine.module.css";
import type { RemoveConnectionButtonProps } from "@/types/components/RemoveConnectionButtonProps";

export function RemoveConnectionButton({ x, y, onRemove }: RemoveConnectionButtonProps) {
  return (
    <g
      className={`${styles.removeButton} nodrag nopan`}
      role="button"
      aria-label="Remove line"
      transform={`translate(${x} ${y})`}
      onClick={onRemove}
      data-export-hidden="true"
    >
      <title>Remove line</title>
      <circle className={styles.removeCircle} r="11" />
      <X className={styles.removeIcon} x="-7" y="-7" width="14" height="14" aria-hidden="true" />
    </g>
  );
}
