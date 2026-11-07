import type { ReactNode } from "react";
import type { ButtonVariant } from "@/types/components/ButtonVariant";

export type LinkButtonProps = {
  variant: ButtonVariant;
  href: string;
  children: ReactNode;
};
