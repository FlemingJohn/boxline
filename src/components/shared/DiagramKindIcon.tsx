import styles from "@/styles/shared/DiagramKindIcon.module.css";
import type { DiagramKindIconProps } from "@/types/components/DiagramKindIconProps";

export function DiagramKindIcon({ kind }: DiagramKindIconProps) {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      {kind === "er" && <rect className={styles.filled} x="3" y="3" width="18" height="6" />}
      <rect className={styles.outline} x="3" y="3" width="18" height="18" rx="2" />
      <path className={styles.outline} d={kind === "er" ? "M3 15 H21 M10 9 V21" : "M3 9 H21 M3 15 H21"} />
    </svg>
  );
}
