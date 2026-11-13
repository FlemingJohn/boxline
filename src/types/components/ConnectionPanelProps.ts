import type { ConnectionData } from "@/types/diagram/ConnectionData";
import type { DiagramConnection } from "@/types/diagram/DiagramConnection";

export type ConnectionPanelProps = {
  connections: DiagramConnection[];
  onUpdateConnection: (connectionId: string, changes: Partial<ConnectionData>) => void;
  onFlipConnection: (connectionId: string) => void;
};
