import type { ReactNode } from "react";
import type { ButtonVariant } from "@/types/components/ButtonVariant";

export type ButtonProps = {
  variant: ButtonVariant;
  label?: string;
  isDisabled?: boolean;
  onClick: () => void;
  children: ReactNode;
};
