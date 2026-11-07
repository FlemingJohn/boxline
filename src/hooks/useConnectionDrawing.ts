import { useReactFlow, type Connection, type Edge, type FinalConnectionState } from "@xyflow/react";
import { getItemRectangle } from "@/lib/diagram/getItemRectangle";
import { isPointNearItem } from "@/lib/diagram/isPointNearItem";
import type { DiagramCanvasProps } from "@/types/components/DiagramCanvasProps";

export function useConnectionDrawing(
  onAddItem: DiagramCanvasProps["onAddItem"],
  onAddConnection: DiagramCanvasProps["onAddConnection"],
) {
  const { screenToFlowPosition } = useReactFlow();

  const handleConnect = ({ source, target }: Connection) => {
    onAddConnection(source, target);
  };

  const handleConnectEnd = (event: MouseEvent | TouchEvent, state: FinalConnectionState) => {
    if (state.isValid || !state.fromNode) return;
    const pointer = "changedTouches" in event ? event.changedTouches[0] : event;
    const dropPoint = screenToFlowPosition({ x: pointer.clientX, y: pointer.clientY });
    if (isPointNearItem(dropPoint, getItemRectangle(state.fromNode))) return;
    onAddConnection(state.fromNode.id, onAddItem(dropPoint).id);
  };

  const isValidConnection = ({ source, target }: Connection | Edge) => source !== target;

  return { handleConnect, handleConnectEnd, isValidConnection };
}
