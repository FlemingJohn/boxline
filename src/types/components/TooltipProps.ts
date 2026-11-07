import type { ReactNode } from "react";

export type TooltipProps = {
  text: string;
  alignment?: "start" | "center" | "end";
  children: ReactNode;
};
