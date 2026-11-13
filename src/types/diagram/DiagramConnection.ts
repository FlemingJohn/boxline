import type { Edge } from "@xyflow/react";
import type { ConnectionData } from "@/types/diagram/ConnectionData";

export type DiagramConnection = Edge<ConnectionData, "line">;
