import { ArrowLeft, LogOut, Save } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Dialog } from "@/components/shared/Dialog";
import { Icon } from "@/components/shared/Icon";
import styles from "@/styles/saving/SavingDialogs.module.css";
import type { LeaveDialogProps } from "@/types/components/LeaveDialogProps";

export function LeaveDialog({ onSave, onLeave, onStay }: LeaveDialogProps) {
  return (
    <Dialog title="Leave without saving?" isWarning>
      <p className={styles.text}>This diagram isn&apos;t saved, so your work will be lost if you leave.</p>
      <div className={styles.buttons}>
        <Button variant="plain" onClick={onStay}>
          <Icon shape={ArrowLeft} />
          Stay
        </Button>
        <Button variant="plain" onClick={onSave}>
          <Icon shape={Save} />
          Save
        </Button>
        <Button variant="warning" onClick={onLeave}>
          <Icon shape={LogOut} />
          Leave without saving
        </Button>
      </div>
    </Dialog>
  );
}
