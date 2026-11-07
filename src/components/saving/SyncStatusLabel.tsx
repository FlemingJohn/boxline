import { CircleCheck, RefreshCw, TriangleAlert } from "lucide-react";
import { SyncActions } from "@/components/saving/SyncActions";
import { Icon } from "@/components/shared/Icon";
import { Tooltip } from "@/components/shared/Tooltip";
import { getSyncMessage } from "@/lib/saving/getSyncMessage";
import styles from "@/styles/saving/SyncStatusLabel.module.css";
import type { SyncStatusLabelProps } from "@/types/components/SyncStatusLabelProps";

export function SyncStatusLabel({ syncState, fileSync }: SyncStatusLabelProps) {
  const { status, fileName } = syncState;
  const isHealthy = status === "saved" || status === "saving";
  const message = (
    <span className={isHealthy ? styles.message : styles.warning}>
      <Icon
        shape={status === "saved" ? CircleCheck : status === "saving" ? RefreshCw : TriangleAlert}
        isSpinning={status === "saving"}
      />
      {getSyncMessage(syncState)}
    </span>
  );

  return (
    <div className={styles.status} role="status">
      {status === "saved" ? <Tooltip text={`Synced to ${fileName}`} alignment="end">{message}</Tooltip> : message}
      <SyncActions syncState={syncState} fileSync={fileSync} />
    </div>
  );
}
