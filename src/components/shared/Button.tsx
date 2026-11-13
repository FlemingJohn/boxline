import styles from "@/styles/shared/Button.module.css";
import type { ButtonProps } from "@/types/components/ButtonProps";

export function Button({ variant, label, isDisabled = false, onClick, children }: ButtonProps) {
  return (
    <button type="button" className={styles[variant]} aria-label={label} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
}
