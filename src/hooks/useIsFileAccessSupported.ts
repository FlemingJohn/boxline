import { useSyncExternalStore } from "react";
import { isFileAccessSupported } from "@/lib/saving/isFileAccessSupported";

const subscribeToNothing = () => () => undefined;

export function useIsFileAccessSupported(): boolean {
  return useSyncExternalStore(subscribeToNothing, isFileAccessSupported, () => true);
}
