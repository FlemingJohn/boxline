import type { AlignmentGuide } from "@/types/diagram/AlignmentGuide";
import type { AlignmentSnap } from "@/types/diagram/AlignmentSnap";
import type { ItemRectangle } from "@/types/diagram/ItemRectangle";

const snapDistance = 6;

export function getAlignmentSnap(moving: ItemRectangle, others: ItemRectangle[]): AlignmentSnap {
  const across = findClosest(moving, others, getHorizontalLines);
  const down = findClosest(moving, others, getVerticalLines);
  const shiftX = across?.shift ?? 0;
  const shiftY = down?.shift ?? 0;
  const moved = { left: moving.left + shiftX, right: moving.right + shiftX, top: moving.top + shiftY, bottom: moving.bottom + shiftY };
  const guides: AlignmentGuide[] = [];
  if (across) guides.push(makeGuide(true, across.line, moved, across.other));
  if (down) guides.push(makeGuide(false, down.line, moved, down.other));
  return { shiftX, shiftY, guides };
}

function getHorizontalLines(rectangle: ItemRectangle): number[] {
  return [rectangle.left, (rectangle.left + rectangle.right) / 2, rectangle.right];
}

function getVerticalLines(rectangle: ItemRectangle): number[] {
  return [rectangle.top, (rectangle.top + rectangle.bottom) / 2, rectangle.bottom];
}

function findClosest(
  moving: ItemRectangle,
  others: ItemRectangle[],
  getLines: (rectangle: ItemRectangle) => number[],
) {
  let closest: { shift: number; line: number; other: ItemRectangle } | null = null;
  for (const other of others) {
    for (const movingLine of getLines(moving)) {
      for (const otherLine of getLines(other)) {
        const shift = otherLine - movingLine;
        const isCloser = Math.abs(shift) <= snapDistance && (!closest || Math.abs(shift) < Math.abs(closest.shift));
        if (isCloser) closest = { shift, line: otherLine, other };
      }
    }
  }
  return closest;
}

function makeGuide(isVertical: boolean, position: number, moved: ItemRectangle, other: ItemRectangle): AlignmentGuide {
  const start = isVertical ? Math.min(moved.top, other.top) : Math.min(moved.left, other.left);
  const end = isVertical ? Math.max(moved.bottom, other.bottom) : Math.max(moved.right, other.right);
  return { isVertical, position, start, end };
}
