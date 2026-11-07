import { FileCheck, X } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Dialog } from "@/components/shared/Dialog";
import { Icon } from "@/components/shared/Icon";
import styles from "@/styles/saving/SavingDialogs.module.css";
import type { ReplaceDialogProps } from "@/types/components/ReplaceDialogProps";

export function ReplaceDialog({ onReplace, onCancel }: ReplaceDialogProps) {
  return (
    <Dialog title="Replace the damaged file?" isWarning>
      <p className={styles.text}>Boxline can&apos;t read the file on disk. Replacing it can&apos;t be undone.</p>
      <div className={styles.buttons}>
        <Button variant="plain" onClick={onCancel}>
          <Icon shape={X} />
          Cancel
        </Button>
        <Button variant="warning" onClick={onReplace}>
          <Icon shape={FileCheck} />
          Replace with my version
        </Button>
      </div>
    </Dialog>
  );
}
