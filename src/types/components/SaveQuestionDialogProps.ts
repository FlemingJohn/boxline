import type { DiagramRules } from "@/types/diagram/DiagramRules";
import type { DiagramSession } from "@/types/saving/DiagramSession";

export type SaveQuestionDialogProps = {
  rules: DiagramRules;
  onStart: (session: DiagramSession) => void;
};
