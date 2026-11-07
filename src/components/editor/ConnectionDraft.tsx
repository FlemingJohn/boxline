import { getSmoothStepPath, type ConnectionLineComponentProps } from "@xyflow/react";
import { getConnectionRoute } from "@/lib/diagram/getConnectionRoute";
import { getItemRectangle } from "@/lib/diagram/getItemRectangle";
import styles from "@/styles/editor/ConnectionLine.module.css";

const cornerRadius = 8;

export function ConnectionDraft({ fromNode, toX, toY }: ConnectionLineComponentProps) {
  const pointer = { left: toX, right: toX, top: toY, bottom: toY };
  const route = getConnectionRoute(getItemRectangle(fromNode), pointer);
  const [path] = getSmoothStepPath({ ...route, borderRadius: cornerRadius });

  return <path className={styles.draft} d={path} />;
}
