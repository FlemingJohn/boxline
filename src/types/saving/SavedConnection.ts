import type { ConnectionData } from "@/types/diagram/ConnectionData";

export type SavedConnection = ConnectionData & {
  id: string;
  from: string;
  to: string;
};
