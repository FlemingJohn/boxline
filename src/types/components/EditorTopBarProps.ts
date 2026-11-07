import type { LinkProps } from "next/link";
import type { ReactNode } from "react";

export type EditorTopBarProps = {
  label: string;
  diagramName: string;
  onRename: (newName: string) => void;
  onHelp: () => void;
  onHomeNavigate: LinkProps["onNavigate"];
  children: ReactNode;
};
