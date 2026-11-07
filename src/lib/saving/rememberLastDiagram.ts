import { set } from "idb-keyval";
import type { LastDiagram } from "@/types/saving/LastDiagram";

export function rememberLastDiagram(lastDiagram: LastDiagram): Promise<void> {
  return set("lastDiagram", lastDiagram);
}
