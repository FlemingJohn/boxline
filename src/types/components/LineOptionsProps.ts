import type { ConnectionData } from "@/types/diagram/ConnectionData";

export type LineOptionsProps = {
  data: ConnectionData;
  onChange: (changes: Partial<ConnectionData>) => void;
};
