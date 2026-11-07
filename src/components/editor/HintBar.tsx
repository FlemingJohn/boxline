import styles from "@/styles/editor/HintBar.module.css";
import type { HintBarProps } from "@/types/components/HintBarProps";

const readyHint = "Click an empty spot to add a box. Drag a box to move it, or click its text to change it.";
const typingHint = "Type, then press Enter for the next row. Press Enter on an empty row to finish.";

export function HintBar({ isTyping }: HintBarProps) {
  return (
    <footer className={styles.bar} aria-live="polite">
      {isTyping ? typingHint : readyHint}
    </footer>
  );
}
