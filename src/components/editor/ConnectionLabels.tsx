import { getLabelPlacement } from "@/lib/diagram/getLabelPlacement";
import styles from "@/styles/editor/ConnectionLine.module.css";
import type { ConnectionLabelsProps } from "@/types/components/ConnectionLabelsProps";

export function ConnectionLabels({ data, route, middleX, middleY }: ConnectionLabelsProps) {
  const start = getLabelPlacement(route.sourceX, route.sourceY, route.sourcePosition);
  const end = getLabelPlacement(route.targetX, route.targetY, route.targetPosition);

  return (
    <g className={styles.labels}>
      {data.startLabel && (
        <text className={styles.label} x={start.x} y={start.y} textAnchor={start.anchor}>{data.startLabel}</text>
      )}
      {data.middleLabel && (
        <text className={styles.label} x={middleX} y={middleY - 16} textAnchor="middle">{data.middleLabel}</text>
      )}
      {data.endLabel && (
        <text className={styles.label} x={end.x} y={end.y} textAnchor={end.anchor}>{data.endLabel}</text>
      )}
    </g>
  );
}
