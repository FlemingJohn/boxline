import { FileCheck, FileDown } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Dialog } from "@/components/shared/Dialog";
import { Icon } from "@/components/shared/Icon";
import styles from "@/styles/saving/SavingDialogs.module.css";
import type { ConflictDialogProps } from "@/types/components/ConflictDialogProps";

export function ConflictDialog({ onKeepMine, onTakeFile }: ConflictDialogProps) {
  return (
    <Dialog title="Which version do you want to keep?" isWarning>
      <p className={styles.text}>The file changed outside Boxline while you were making changes here.</p>
      <div className={styles.buttons}>
        <Button variant="plain" onClick={onTakeFile}>
          <Icon shape={FileDown} />
          Use the file
        </Button>
        <Button variant="warning" onClick={onKeepMine}>
          <Icon shape={FileCheck} />
          Keep mine
        </Button>
      </div>
    </Dialog>
  );
}
