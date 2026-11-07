import type { ReactNode } from "react";
import type { ButtonVariant } from "@/types/components/ButtonVariant";

export type ButtonProps = {
  variant: ButtonVariant;
  label?: string;
  onClick: () => void;
  children: ReactNode;
};
