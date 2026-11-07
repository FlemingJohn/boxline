import { House, KeyRound } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Dialog } from "@/components/shared/Dialog";
import { Icon } from "@/components/shared/Icon";
import { LinkButton } from "@/components/shared/LinkButton";
import { useContinueDiagram } from "@/hooks/useContinueDiagram";
import { getDiagramName } from "@/lib/saving/getDiagramName";
import styles from "@/styles/saving/SavingDialogs.module.css";
import type { ContinueDialogProps } from "@/types/components/ContinueDialogProps";

export function ContinueDialog({ kind, onStart }: ContinueDialogProps) {
  const { step, fileName, message, allowAccess } = useContinueDiagram(kind, onStart);
  if (step === "checking") return null;

  const needsAccess = step === "needsAccess";
  const title = needsAccess ? `Continue ${getDiagramName(fileName)}?` : "This diagram can't be opened";
  const text = needsAccess ? "The browser needs your permission again to keep this diagram synced." : message;

  return (
    <Dialog title={title}>
      <p className={styles.text}>{text}</p>
      {needsAccess && message && <p className={styles.error} role="alert">{message}</p>}
      <div className={styles.buttons}>
        <LinkButton variant="plain" href="/">
          <Icon shape={House} />
          Home
        </LinkButton>
        {needsAccess && (
          <Button variant="primary" onClick={allowAccess}>
            <Icon shape={KeyRound} />
            Allow access
          </Button>
        )}
      </div>
    </Dialog>
  );
}
