import { guideFinishedKey } from "@/lib/guide/guideFinishedKey";

export function rememberGuideFinished(): void {
  try {
    localStorage.setItem(guideFinishedKey, "true");
  } catch {
    return;
  }
}
