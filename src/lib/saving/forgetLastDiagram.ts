import { del } from "idb-keyval";

export function forgetLastDiagram(): Promise<void> {
  return del("lastDiagram");
}
