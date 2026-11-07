import { get } from "idb-keyval";
import type { LastDiagram } from "@/types/saving/LastDiagram";

export async function getLastDiagram(): Promise<LastDiagram | null> {
  return (await get<LastDiagram>("lastDiagram")) ?? null;
}
