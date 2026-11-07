import { Background, BackgroundVariant, ReactFlow, useReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/base.css";
import { useRef, type MouseEvent } from "react";
import { ItemCard } from "@/components/editor/ItemCard";
import { useDiagramItems } from "@/hooks/useDiagramItems";
import { isTextFieldFocused } from "@/lib/diagram/isTextFieldFocused";
import styles from "@/styles/editor/DiagramCanvas.module.css";

const itemTypes = { item: ItemCard };

export function DiagramCanvas() {
  const { items, handleItemsChange, addItemAt } = useDiagramItems();
  const { screenToFlowPosition } = useReactFlow();
  const wasTypingOnPress = useRef(false);

  const handlePress = () => {
    wasTypingOnPress.current = isTextFieldFocused();
  };

  const handlePaneClick = (event: MouseEvent) => {
    if (wasTypingOnPress.current) return;
    addItemAt(screenToFlowPosition({ x: event.clientX, y: event.clientY }));
  };

  return (
    <div className={styles.canvas} onPointerDownCapture={handlePress}>
      <ReactFlow
        nodes={items}
        nodeTypes={itemTypes}
        onNodesChange={handleItemsChange}
        onPaneClick={handlePaneClick}
        nodesConnectable={false}
        zoomOnDoubleClick={false}
        deleteKeyCode="Delete"
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
      </ReactFlow>
    </div>
  );
}
