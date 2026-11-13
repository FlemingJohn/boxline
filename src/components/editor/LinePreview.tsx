import { getMarkerUrl } from "@/lib/diagram/getMarkerUrl";
import styles from "@/styles/editor/LinePreview.module.css";
import type { LinePreviewProps } from "@/types/components/LinePreviewProps";

export function LinePreview({ look }: LinePreviewProps) {
  return (
    <svg className={styles.preview} viewBox="0 0 64 16" aria-hidden="true">
      <path
        className={look.isDashed ? `${styles.line} ${styles.dashed}` : styles.line}
        d="M4 8 H60"
        markerStart={getMarkerUrl(look.startMarker)}
        markerEnd={getMarkerUrl(look.endMarker)}
      />
    </svg>
  );
}
