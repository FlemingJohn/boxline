import type { AlignmentGuide } from "@/types/diagram/AlignmentGuide";

export type AlignmentSnap = {
  shiftX: number;
  shiftY: number;
  guides: AlignmentGuide[];
};
