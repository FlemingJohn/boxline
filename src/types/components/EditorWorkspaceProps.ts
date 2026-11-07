import type { DiagramRules } from "@/types/diagram/DiagramRules";
import type { DiagramSession } from "@/types/saving/DiagramSession";

export type EditorWorkspaceProps = {
  session: DiagramSession;
  rules: DiagramRules;
};
