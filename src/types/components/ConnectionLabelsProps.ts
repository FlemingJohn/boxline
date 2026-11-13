import type { ConnectionData } from "@/types/diagram/ConnectionData";
import type { ConnectionRoute } from "@/types/diagram/ConnectionRoute";

export type ConnectionLabelsProps = {
  data: ConnectionData;
  route: ConnectionRoute;
  middleX: number;
  middleY: number;
};
