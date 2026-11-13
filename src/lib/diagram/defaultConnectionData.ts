import type { ConnectionData } from "@/types/diagram/ConnectionData";

export const defaultConnectionData: ConnectionData = {
  classLineType: "association",
  startLabel: "",
  middleLabel: "",
  endLabel: "",
  startEnd: "one",
  endEnd: "many",
};
