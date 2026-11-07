import { Clock, Save } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Dialog } from "@/components/shared/Dialog";
import { Icon } from "@/components/shared/Icon";
import { useIsFileAccessSupported } from "@/hooks/useIsFileAccessSupported";
import { useSaveQuestion } from "@/hooks/useSaveQuestion";
import styles from "@/styles/saving/SavingDialogs.module.css";
import type { SaveQuestionDialogProps } from "@/types/components/SaveQuestionDialogProps";

export function SaveQuestionDialog({ rules, onStart }: SaveQuestionDialogProps) {
  const isSupported = useIsFileAccessSupported();
  const { errorMessage, answerYes, answerNotNow } = useSaveQuestion(rules, onStart);
  const text = isSupported
    ? "Boxline will keep it synced to a file on your computer, so it's there when you come back."
    : "Auto-sync needs Chrome or Edge. In this browser, your work is lost when you leave.";

  return (
    <Dialog title="Do you want to save this diagram?">
      <p className={styles.text}>{text}</p>
      {errorMessage && <p className={styles.error} role="alert">{errorMessage}</p>}
      <div className={styles.buttons}>
        <Button variant="plain" onClick={answerNotNow}>
          <Icon shape={Clock} />
          {isSupported ? "Not now" : "Continue without saving"}
        </Button>
        {isSupported && (
          <Button variant="primary" onClick={answerYes}>
            <Icon shape={Save} />
            Yes, save it
          </Button>
        )}
      </div>
    </Dialog>
  );
}
