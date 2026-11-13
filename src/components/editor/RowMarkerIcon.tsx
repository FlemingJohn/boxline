import { KeyRound, Link2 } from "lucide-react";
import styles from "@/styles/editor/RowField.module.css";
import type { RowMarkerIconProps } from "@/types/components/RowMarkerIconProps";

export function RowMarkerIcon({ marker }: RowMarkerIconProps) {
  const isPrimary = marker === "primary" || marker === "primaryAndForeign";
  const isForeign = marker === "foreign" || marker === "primaryAndForeign";

  return (
    <span className={styles.markerSlot} aria-hidden="true">
      {isPrimary && <KeyRound className={styles.primaryIcon} />}
      {isForeign && <Link2 className={styles.foreignIcon} />}
    </span>
  );
}
