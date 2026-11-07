import { useState, useSyncExternalStore } from "react";
import { hasFinishedGuide } from "@/lib/guide/hasFinishedGuide";
import { rememberGuideFinished } from "@/lib/guide/rememberGuideFinished";

const subscribeToNothing = () => () => undefined;

export function useGuideProgress() {
  const storedAnswer = useSyncExternalStore<boolean | null>(subscribeToNothing, hasFinishedGuide, () => null);
  const [hasJustFinished, setHasJustFinished] = useState(false);

  const finishGuide = () => {
    rememberGuideFinished();
    setHasJustFinished(true);
  };

  return { hasLoaded: storedAnswer !== null, hasFinished: Boolean(storedAnswer) || hasJustFinished, finishGuide };
}
