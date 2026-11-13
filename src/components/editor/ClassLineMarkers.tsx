import { markerIds } from "@/lib/diagram/markerIds";
import styles from "@/styles/editor/ConnectionMarkers.module.css";

export function ClassLineMarkers() {
  return (
    <>
      <marker id={markerIds.triangle} viewBox="0 0 16 16" refX="15" refY="8" markerWidth="16" markerHeight="16" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
        <path className={styles.hollow} d="M2 2 L15 8 L2 14 Z" />
      </marker>
      <marker id={markerIds.openArrow} viewBox="0 0 16 16" refX="15" refY="8" markerWidth="16" markerHeight="16" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
        <path className={styles.open} d="M3 2 L15 8 L3 14" />
      </marker>
      <marker id={markerIds.hollowDiamond} viewBox="0 0 24 16" refX="23" refY="8" markerWidth="24" markerHeight="16" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
        <path className={styles.hollow} d="M1 8 L12 2.5 L23 8 L12 13.5 Z" />
      </marker>
      <marker id={markerIds.filledDiamond} viewBox="0 0 24 16" refX="23" refY="8" markerWidth="24" markerHeight="16" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
        <path className={styles.filled} d="M1 8 L12 2.5 L23 8 L12 13.5 Z" />
      </marker>
    </>
  );
}
