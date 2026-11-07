import type { XYPosition } from "@xyflow/react";
import { makeId } from "@/lib/diagram/makeId";
import type { DiagramItem } from "@/types/diagram/DiagramItem";

const distanceFromClickToItemLeft = 70;
const distanceFromClickToItemTop = 16;

export function makeNewItem(clickPosition: XYPosition): DiagramItem {
  return {
    id: makeId(),
    type: "item",
    selected: true,
    position: {
      x: clickPosition.x - distanceFromClickToItemLeft,
      y: clickPosition.y - distanceFromClickToItemTop,
    },
    data: { name: "", rows: [], isNew: true },
  };
}
