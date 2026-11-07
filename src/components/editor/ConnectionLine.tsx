import { BaseEdge, getSmoothStepPath, useInternalNode, useReactFlow, type EdgeProps } from "@xyflow/react";
import { RemoveConnectionButton } from "@/components/editor/RemoveConnectionButton";
import { getConnectionRoute } from "@/lib/diagram/getConnectionRoute";
import { getItemRectangle } from "@/lib/diagram/getItemRectangle";
import type { DiagramConnection } from "@/types/diagram/DiagramConnection";

const cornerRadius = 8;

export function ConnectionLine({ id, source, target, selected }: EdgeProps<DiagramConnection>) {
  const sourceItem = useInternalNode(source);
  const targetItem = useInternalNode(target);
  const { deleteElements } = useReactFlow();
  if (!sourceItem || !targetItem) return null;

  const route = getConnectionRoute(getItemRectangle(sourceItem), getItemRectangle(targetItem));
  const [path, middleX, middleY] = getSmoothStepPath({ ...route, borderRadius: cornerRadius });

  return (
    <>
      <BaseEdge id={id} path={path} interactionWidth={18} />
      {selected && (
        <RemoveConnectionButton
          x={middleX}
          y={middleY}
          onRemove={() => deleteElements({ edges: [{ id }] })}
        />
      )}
    </>
  );
}
