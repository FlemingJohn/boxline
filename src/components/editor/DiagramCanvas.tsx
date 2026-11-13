import { Background, BackgroundVariant, ConnectionMode, ReactFlow, useReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/base.css";
import { useRef, type MouseEvent } from "react";
import { ConnectionDraft } from "@/components/editor/ConnectionDraft";
import { ConnectionLine } from "@/components/editor/ConnectionLine";
import { ConnectionMarkers } from "@/components/editor/ConnectionMarkers";
import { ConnectionPanel } from "@/components/editor/ConnectionPanel";
import { ItemCard } from "@/components/editor/ItemCard";
import { useConnectionDrawing } from "@/hooks/useConnectionDrawing";
import { isTextFieldFocused } from "@/lib/diagram/isTextFieldFocused";
import styles from "@/styles/editor/DiagramCanvas.module.css";
import type { DiagramCanvasProps } from "@/types/components/DiagramCanvasProps";

const itemTypes = { item: ItemCard };
const connectionTypes = { line: ConnectionLine };

export function DiagramCanvas(props: DiagramCanvasProps) {
  const { items, connections, onItemsChange, onConnectionsChange, onAddItem, onAddConnection } = props;
  const { screenToFlowPosition } = useReactFlow();
  const drawing = useConnectionDrawing(onAddItem, onAddConnection);
  const wasTypingOnPress = useRef(false);

  const handlePress = () => {
    wasTypingOnPress.current = isTextFieldFocused();
  };

  const handlePaneClick = (event: MouseEvent) => {
    if (!wasTypingOnPress.current) onAddItem(screenToFlowPosition({ x: event.clientX, y: event.clientY }));
  };

  return (
    <div className={styles.canvas} onPointerDownCapture={handlePress}>
      <ConnectionMarkers />
      <ReactFlow
        nodes={items}
        edges={connections}
        nodeTypes={itemTypes}
        edgeTypes={connectionTypes}
        connectionMode={ConnectionMode.Loose}
        connectionLineComponent={ConnectionDraft}
        connectOnClick={false}
        isValidConnection={drawing.isValidConnection}
        onNodesChange={onItemsChange}
        onEdgesChange={onConnectionsChange}
        onConnect={drawing.handleConnect}
        onConnectEnd={drawing.handleConnectEnd}
        onPaneClick={handlePaneClick}
        zoomOnDoubleClick={false}
        deleteKeyCode="Delete"
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
        <ConnectionPanel
          connections={connections}
          onUpdateConnection={props.onUpdateConnection}
          onFlipConnection={props.onFlipConnection}
        />
      </ReactFlow>
    </div>
  );
}
