import { defaultConnectionData } from "@/lib/diagram/defaultConnectionData";
import type { ClassLineType } from "@/types/diagram/ClassLineType";
import type { ConnectionData } from "@/types/diagram/ConnectionData";
import type { TableLineEnd } from "@/types/diagram/TableLineEnd";

const classLineTypes: ClassLineType[] = [
  "association",
  "inheritance",
  "implementation",
  "dependency",
  "aggregation",
  "composition",
];
const tableLineEnds: TableLineEnd[] = ["one", "zeroOrOne", "many", "zeroOrMany"];

export function readSavedConnectionData(saved: Partial<ConnectionData>): ConnectionData {
  return {
    classLineType: pickAllowed(saved.classLineType, classLineTypes, defaultConnectionData.classLineType),
    startLabel: readText(saved.startLabel),
    middleLabel: readText(saved.middleLabel),
    endLabel: readText(saved.endLabel),
    startEnd: pickAllowed(saved.startEnd, tableLineEnds, defaultConnectionData.startEnd),
    endEnd: pickAllowed(saved.endEnd, tableLineEnds, defaultConnectionData.endEnd),
  };
}

function readText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function pickAllowed<Choice extends string>(value: unknown, allowed: Choice[], fallback: Choice): Choice {
  return allowed.includes(value as Choice) ? (value as Choice) : fallback;
}
