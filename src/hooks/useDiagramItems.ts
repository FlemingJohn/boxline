import { useNodesState, type XYPosition } from "@xyflow/react";
import { makeNewItem } from "@/lib/diagram/makeNewItem";
import type { DiagramItem } from "@/types/diagram/DiagramItem";

export function useDiagramItems(initialItems: DiagramItem[]) {
  const [items, setItems, handleItemsChange] = useNodesState<DiagramItem>(initialItems);

  const addItemAt = (clickPosition: XYPosition) => {
    const newItem = makeNewItem(clickPosition);
    setItems((currentItems) => [...currentItems, newItem]);
    return newItem;
  };

  const replaceItems = (newItems: DiagramItem[]) => {
    setItems((currentItems) =>
      newItems.map((item) => ({
        ...item,
        measured: currentItems.find((currentItem) => currentItem.id === item.id)?.measured,
      })),
    );
  };

  const moveItems = (positions: Map<string, XYPosition>) => {
    setItems((currentItems) =>
      currentItems.map((item) => ({ ...item, position: positions.get(item.id) ?? item.position })),
    );
  };

  return { items, handleItemsChange, addItemAt, replaceItems, moveItems };
}
