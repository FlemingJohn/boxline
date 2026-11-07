import type { ReactNode } from "react";

export type DialogProps = {
  title: string;
  isWarning?: boolean;
  isWide?: boolean;
  children: ReactNode;
};
