import { CircleHelp } from "lucide-react";
import { DiagramNameField } from "@/components/editor/DiagramNameField";
import { Button } from "@/components/shared/Button";
import { Icon } from "@/components/shared/Icon";
import { LinkButton } from "@/components/shared/LinkButton";
import { Logo } from "@/components/shared/Logo";
import { Tooltip } from "@/components/shared/Tooltip";
import styles from "@/styles/editor/EditorTopBar.module.css";
import type { EditorTopBarProps } from "@/types/components/EditorTopBarProps";

export function EditorTopBar(props: EditorTopBarProps) {
  const { label, diagramName, onRename, onHelp, onHomeNavigate, children } = props;

  return (
    <header className={styles.bar}>
      <Tooltip text="Go to the landing page" alignment="start">
        <LinkButton variant="plain" href="/" onNavigate={onHomeNavigate}>
          <Logo className={styles.logo} />
          Home
        </LinkButton>
      </Tooltip>
      <DiagramNameField name={diagramName} onRename={onRename} />
      <span className={styles.kind}>{label}</span>
      {children}
      <Tooltip text="See how Boxline works" alignment="end">
        <Button variant="plain" onClick={onHelp}><Icon shape={CircleHelp} />Help</Button>
      </Tooltip>
    </header>
  );
}
