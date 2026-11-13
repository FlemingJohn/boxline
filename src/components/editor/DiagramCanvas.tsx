import { Background, BackgroundVariant, ConnectionMode, ReactFlow, ViewportPortal, useReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/base.css";
import { useMemo, useRef, type MouseEvent } from "react";
import { AlignmentGuides } from "@/components/editor/AlignmentGuides";
import { CanvasControls } from "@/components/editor/CanvasControls";
import { ConnectionDraft } from "@/components/editor/ConnectionDraft";
import { ConnectionLine } from "@/components/editor/ConnectionLine";
import { ConnectionMarkers } from "@/components/editor/ConnectionMarkers";
import { ConnectionPanel } from "@/components/editor/ConnectionPanel";
import { ItemCard } from "@/components/editor/ItemCard";
import { useAlignmentGuides } from "@/hooks/useAlignmentGuides";
import { useCanvasTidy } from "@/hooks/useCanvasTidy";
import { useConnectionDrawing } from "@/hooks/useConnectionDrawing";
import { ConnectionRoutesContext } from "@/lib/diagram/ConnectionRoutesContext";
import { getConnectionRoutes } from "@/lib/diagram/getConnectionRoutes";
import { isTextFieldFocused } from "@/lib/diagram/isTextFieldFocused";
import styles from "@/styles/editor/DiagramCanvas.module.css";
import type { DiagramCanvasProps } from "@/types/components/DiagramCanvasProps";

const itemTypes = { item: ItemCard };
const connectionTypes = { line: ConnectionLine };

export function DiagramCanvas(props: DiagramCanvasProps) {
  const { items, connections, onItemsChange, onConnectionsChange, onAddItem } = props;
  const { screenToFlowPosition } = useReactFlow();
  const drawing = useConnectionDrawing(onAddItem, props.onAddConnection);
  const alignment = useAlignmentGuides(items);
  const tidyUp = useCanvasTidy(props);
  const wasTypingOnPress = useRef(false);
  const routes = useMemo(() => getConnectionRoutes(items, connections), [items, connections]);

  const handlePaneClick = (event: MouseEvent) => {
    if (!wasTypingOnPress.current) onAddItem(screenToFlowPosition({ x: event.clientX, y: event.clientY }));
  };

  return (
    <div className={styles.canvas} onPointerDownCapture={() => (wasTypingOnPress.current = isTextFieldFocused())}>
      <ConnectionRoutesContext value={routes}>
        <ReactFlow
          nodes={items}
          edges={connections}
          nodeTypes={itemTypes}
          edgeTypes={connectionTypes}
          connectionMode={ConnectionMode.Loose}
          connectionLineComponent={ConnectionDraft}
          connectOnClick={false}
          isValidConnection={drawing.isValidConnection}
          onNodesChange={(changes) => onItemsChange(alignment.snapChanges(changes))}
          onEdgesChange={onConnectionsChange}
          onConnect={drawing.handleConnect}
          onConnectEnd={drawing.handleConnectEnd}
          onPaneClick={handlePaneClick}
          zoomOnDoubleClick={false}
          deleteKeyCode="Delete"
        >
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
          <ViewportPortal>
            <ConnectionMarkers />
            <AlignmentGuides guides={alignment.guides} />
          </ViewportPortal>
          <ConnectionPanel connections={connections} onUpdateConnection={props.onUpdateConnection} onFlipConnection={props.onFlipConnection} />
          <CanvasControls onTidy={tidyUp} />
        </ReactFlow>
      </ConnectionRoutesContext>
    </div>
  );
}
