import { TriangleAlert } from "lucide-react";
import { useEffect, useRef } from "react";
import { Icon } from "@/components/shared/Icon";
import styles from "@/styles/shared/Dialog.module.css";
import type { DialogProps } from "@/types/components/DialogProps";

export function Dialog({ title, isWarning = false, isWide = false, children }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={isWide ? `${styles.dialog} ${styles.wide}` : styles.dialog}
      onCancel={(event) => event.preventDefault()}
    >
      <h2 className={isWarning ? `${styles.title} ${styles.warningTitle}` : styles.title}>
        {isWarning && <Icon shape={TriangleAlert} />}
        {title}
      </h2>
      {children}
    </dialog>
  );
}
