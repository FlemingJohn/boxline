import styles from "@/styles/shared/Logo.module.css";
import type { LogoProps } from "@/types/components/LogoProps";

export function Logo({ className }: LogoProps) {
  return (
    <svg className={`${styles.logo} ${className}`} viewBox="0 0 32 32" aria-hidden="true">
      <rect className={styles.filledBox} x="3" y="3" width="14" height="11" rx="2" />
      <rect className={styles.openBox} x="15" y="18" width="14" height="11" rx="2" />
      <path className={styles.line} d="M17 8.5 H22 V18" />
      <circle className={styles.dot} cx="22" cy="18" r="2.75" />
    </svg>
  );
}
