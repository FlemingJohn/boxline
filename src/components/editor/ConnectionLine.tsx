import { BaseEdge, getSmoothStepPath, useInternalNode, useReactFlow, type EdgeProps } from "@xyflow/react";
import { ConnectionLabels } from "@/components/editor/ConnectionLabels";
import { RemoveConnectionButton } from "@/components/editor/RemoveConnectionButton";
import { useDiagramRules } from "@/hooks/useDiagramRules";
import { defaultConnectionData } from "@/lib/diagram/defaultConnectionData";
import { getConnectionRoute } from "@/lib/diagram/getConnectionRoute";
import { getItemRectangle } from "@/lib/diagram/getItemRectangle";
import { getMarkerUrl } from "@/lib/diagram/getMarkerUrl";
import styles from "@/styles/editor/ConnectionLine.module.css";
import type { DiagramConnection } from "@/types/diagram/DiagramConnection";

const cornerRadius = 8;

export function ConnectionLine({ id, source, target, selected, data }: EdgeProps<DiagramConnection>) {
  const rules = useDiagramRules();
  const sourceItem = useInternalNode(source);
  const targetItem = useInternalNode(target);
  const { deleteElements } = useReactFlow();
  if (!sourceItem || !targetItem) return null;

  const lineData = data ?? defaultConnectionData;
  const look = rules.getConnectionLook(lineData);
  const route = getConnectionRoute(getItemRectangle(sourceItem), getItemRectangle(targetItem));
  const [path, middleX, middleY] = getSmoothStepPath({ ...route, borderRadius: cornerRadius });

  return (
    <>
      <BaseEdge
        id={id}
        path={path}
        className={look.isDashed ? styles.dashed : undefined}
        markerStart={getMarkerUrl(look.startMarker)}
        markerEnd={getMarkerUrl(look.endMarker)}
        interactionWidth={18}
      />
      <ConnectionLabels data={lineData} route={route} middleX={middleX} middleY={middleY} />
      {selected && (
        <RemoveConnectionButton x={middleX} y={middleY} onRemove={() => deleteElements({ edges: [{ id }] })} />
      )}
    </>
  );
}
