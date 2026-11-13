import type { TableLineEnd } from "@/types/diagram/TableLineEnd";

export type TableEndChoicesProps = {
  label: string;
  chosenEnd: TableLineEnd;
  onChoose: (end: TableLineEnd) => void;
};
