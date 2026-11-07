import styles from "@/styles/shared/Icon.module.css";
import type { IconProps } from "@/types/components/IconProps";

export function Icon({ shape: Shape, isSpinning = false }: IconProps) {
  const spinningClass = isSpinning ? styles.spinning : "";
  return <Shape className={`${styles.icon} ${spinningClass}`} aria-hidden="true" />;
}
