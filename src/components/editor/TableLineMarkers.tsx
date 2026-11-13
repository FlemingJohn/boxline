import { markerIds } from "@/lib/diagram/markerIds";
import styles from "@/styles/editor/ConnectionMarkers.module.css";

export function TableLineMarkers() {
  return (
    <>
      <marker id={markerIds.one} viewBox="0 0 20 16" refX="20" refY="8" markerWidth="20" markerHeight="16" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
        <path className={styles.open} d="M9 2 V14 M14 2 V14" />
      </marker>
      <marker id={markerIds.zeroOrOne} viewBox="0 0 20 16" refX="20" refY="8" markerWidth="20" markerHeight="16" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
        <circle className={styles.hollow} cx="5" cy="8" r="3.5" />
        <path className={styles.open} d="M14 2 V14" />
      </marker>
      <marker id={markerIds.many} viewBox="0 0 20 16" refX="20" refY="8" markerWidth="20" markerHeight="16" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
        <path className={styles.open} d="M5 2 V14 M9 8 L20 2 M9 8 L20 14 M9 8 L20 8" />
      </marker>
      <marker id={markerIds.zeroOrMany} viewBox="0 0 20 16" refX="20" refY="8" markerWidth="20" markerHeight="16" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
        <circle className={styles.hollow} cx="4.5" cy="8" r="3.5" />
        <path className={styles.open} d="M10 8 L20 2 M10 8 L20 14 M10 8 L20 8" />
      </marker>
    </>
  );
}
