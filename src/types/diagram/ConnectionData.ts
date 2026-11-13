import type { ClassLineType } from "@/types/diagram/ClassLineType";
import type { TableLineEnd } from "@/types/diagram/TableLineEnd";

export type ConnectionData = {
  classLineType: ClassLineType;
  startLabel: string;
  middleLabel: string;
  endLabel: string;
  startEnd: TableLineEnd;
  endEnd: TableLineEnd;
};
