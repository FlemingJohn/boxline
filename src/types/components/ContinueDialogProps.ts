import type { DiagramKind } from "@/types/diagram/DiagramKind";
import type { DiagramSession } from "@/types/saving/DiagramSession";

export type ContinueDialogProps = {
  kind: DiagramKind;
  onStart: (session: DiagramSession) => void;
};
