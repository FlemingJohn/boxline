import type { NodeChange, NodePositionChange } from "@xyflow/react";
import { useState } from "react";
import { getAlignmentSnap } from "@/lib/diagram/getAlignmentSnap";
import { getRectangleAt } from "@/lib/diagram/getRectangleAt";
import type { AlignmentGuide } from "@/types/diagram/AlignmentGuide";
import type { DiagramItem } from "@/types/diagram/DiagramItem";

export function useAlignmentGuides(items: DiagramItem[]) {
  const [guides, setGuides] = useState<AlignmentGuide[]>([]);

  const snapChanges = (changes: NodeChange<DiagramItem>[]) => {
    const moves = changes.filter(isMoveWithPosition);
    if (moves.length !== 1) {
      if (changes.some((change) => change.type === "position")) setGuides([]);
      return changes;
    }
    const move = moves[0];
    const item = items.find((candidate) => candidate.id === move.id);
    if (!item?.measured?.width || !move.position) return changes;
    const others = items
      .filter((candidate) => candidate.id !== move.id && candidate.measured?.width)
      .map((candidate) => getRectangleAt(candidate.position, candidate.measured ?? {}));
    const snap = getAlignmentSnap(getRectangleAt(move.position, item.measured), others);
    setGuides(move.dragging ? snap.guides : []);
    const position = { x: move.position.x + snap.shiftX, y: move.position.y + snap.shiftY };
    return changes.map((change) => (change === move ? { ...move, position } : change));
  };

  return { guides, snapChanges };
}

function isMoveWithPosition(change: NodeChange<DiagramItem>): change is NodePositionChange {
  return change.type === "position" && Boolean(change.position);
}
