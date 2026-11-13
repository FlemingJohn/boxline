import styles from "@/styles/shared/ChoiceButton.module.css";
import type { ChoiceButtonProps } from "@/types/components/ChoiceButtonProps";

export function ChoiceButton({ isChosen, onClick, children }: ChoiceButtonProps) {
  return (
    <button type="button" className={styles.choice} aria-pressed={isChosen} onClick={onClick}>
      {children}
    </button>
  );
}
