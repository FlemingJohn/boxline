import type { ReactNode } from "react";

export type ChoiceButtonProps = {
  isChosen: boolean;
  onClick: () => void;
  children: ReactNode;
};
