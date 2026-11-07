import { useNodesState, type XYPosition } from "@xyflow/react";
import { makeNewItem } from "@/lib/diagram/makeNewItem";
import type { DiagramItem } from "@/types/diagram/DiagramItem";

export function useDiagramItems() {
  const [items, setItems, handleItemsChange] = useNodesState<DiagramItem>([]);

  const addItemAt = (clickPosition: XYPosition) => {
    setItems((currentItems) => [...currentItems, makeNewItem(clickPosition)]);
  };

  return { items, handleItemsChange, addItemAt };
}
