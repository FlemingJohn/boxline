import { LinkButton } from "@/components/shared/LinkButton";
import { Logo } from "@/components/shared/Logo";
import styles from "@/styles/editor/EditorTopBar.module.css";
import type { EditorTopBarProps } from "@/types/components/EditorTopBarProps";

export function EditorTopBar({ label }: EditorTopBarProps) {
  return (
    <header className={styles.bar}>
      <LinkButton variant="plain" href="/">
        <Logo className={styles.logo} />
        Home
      </LinkButton>
      <span className={styles.kind}>{label}</span>
    </header>
  );
}
