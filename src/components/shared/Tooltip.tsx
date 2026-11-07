import styles from "@/styles/shared/Tooltip.module.css";
import type { TooltipProps } from "@/types/components/TooltipProps";

export function Tooltip({ text, alignment = "center", children }: TooltipProps) {
  return (
    <span className={styles.holder}>
      {children}
      <span className={`${styles.tooltip} ${styles[alignment]}`} role="tooltip">
        {text}
      </span>
    </span>
  );
}
