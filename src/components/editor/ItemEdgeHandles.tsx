import { Handle, Position, useConnection } from "@xyflow/react";
import styles from "@/styles/editor/ItemEdgeHandles.module.css";
import type { ItemEdgeHandlesProps } from "@/types/components/ItemEdgeHandlesProps";

export function ItemEdgeHandles({ itemId }: ItemEdgeHandlesProps) {
  const isDrawing = useConnection((connection) => connection.inProgress);
  const startItemId = useConnection((connection) => connection.fromNode?.id);
  const canReceiveLine = isDrawing && startItemId !== itemId;

  return (
    <>
      <Handle className={styles.edge} type="source" position={Position.Top} data-export-hidden="true">
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </Handle>
      {canReceiveLine && (
        <Handle className={styles.dropArea} type="target" position={Position.Top} isConnectableStart={false} data-export-hidden="true" />
      )}
    </>
  );
}
