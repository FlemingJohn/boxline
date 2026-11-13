import { classLineLooks } from "@/lib/class-diagram/classLineLooks";
import type { ConnectionData } from "@/types/diagram/ConnectionData";
import type { ConnectionLook } from "@/types/diagram/ConnectionLook";

export function getClassConnectionLook(data: ConnectionData): ConnectionLook {
  return classLineLooks[data.classLineType];
}
