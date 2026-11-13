import type { ConnectionData } from "@/types/diagram/ConnectionData";
import type { ConnectionLook } from "@/types/diagram/ConnectionLook";
import type { DiagramKind } from "@/types/diagram/DiagramKind";
import type { RowDescription } from "@/types/diagram/RowDescription";

export type DiagramRules = {
  kind: DiagramKind;
  label: string;
  defaultFileName: string;
  itemNamePlaceholder: string;
  rowPlaceholder: string;
  describeRow: (text: string) => RowDescription;
  isNameEmphasised: (name: string) => boolean;
  getConnectionLook: (data: ConnectionData) => ConnectionLook;
};
