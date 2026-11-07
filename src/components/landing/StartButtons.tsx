import { DiagramKindIcon } from "@/components/shared/DiagramKindIcon";
import { LinkButton } from "@/components/shared/LinkButton";
import styles from "@/styles/landing/StartButtons.module.css";

export function StartButtons() {
  return (
    <div className={styles.buttons}>
      <LinkButton variant="large" href="/editor/class">
        <DiagramKindIcon kind="class" />
        <span className={styles.text}>
          <strong>New class diagram</strong>
          <small>For classes in your code</small>
        </span>
      </LinkButton>
      <LinkButton variant="large" href="/editor/er">
        <DiagramKindIcon kind="er" />
        <span className={styles.text}>
          <strong>New ER diagram</strong>
          <small>For tables in your database</small>
        </span>
      </LinkButton>
    </div>
  );
}
