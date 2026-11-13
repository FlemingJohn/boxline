import { ClassLineMarkers } from "@/components/editor/ClassLineMarkers";
import { TableLineMarkers } from "@/components/editor/TableLineMarkers";
import styles from "@/styles/editor/ConnectionMarkers.module.css";

export function ConnectionMarkers() {
  return (
    <svg className={styles.definitions} aria-hidden="true">
      <defs>
        <ClassLineMarkers />
        <TableLineMarkers />
      </defs>
    </svg>
  );
}
