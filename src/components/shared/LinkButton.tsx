import Link from "next/link";
import styles from "@/styles/shared/Button.module.css";
import type { LinkButtonProps } from "@/types/components/LinkButtonProps";

export function LinkButton({ variant, href, onNavigate, children }: LinkButtonProps) {
  return (
    <Link className={styles[variant]} href={href} onNavigate={onNavigate}>
      {children}
    </Link>
  );
}
