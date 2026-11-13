import styles from "@/styles/editor/AlignmentGuides.module.css";
import type { AlignmentGuidesProps } from "@/types/components/AlignmentGuidesProps";

export function AlignmentGuides({ guides }: AlignmentGuidesProps) {
  return (
    <svg className={styles.guides} aria-hidden="true" data-export-hidden="true">
      {guides.map((guide) =>
        guide.isVertical ? (
          <line key={`vertical-${guide.position}`} className={styles.line} x1={guide.position} x2={guide.position} y1={guide.start - 12} y2={guide.end + 12} />
        ) : (
          <line key={`horizontal-${guide.position}`} className={styles.line} y1={guide.position} y2={guide.position} x1={guide.start - 12} x2={guide.end + 12} />
        ),
      )}
    </svg>
  );
}
