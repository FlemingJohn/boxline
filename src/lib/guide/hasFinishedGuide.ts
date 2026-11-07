import { guideFinishedKey } from "@/lib/guide/guideFinishedKey";

export function hasFinishedGuide(): boolean {
  try {
    return localStorage.getItem(guideFinishedKey) === "true";
  } catch {
    return false;
  }
}
