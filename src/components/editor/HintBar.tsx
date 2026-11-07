import { useConnection } from "@xyflow/react";
import styles from "@/styles/editor/HintBar.module.css";
import type { HintBarProps } from "@/types/components/HintBarProps";

const readyHint = "Click an empty spot to add a box. Drag a box to move it, or drag from its edge to connect it.";
const typingHint = "Type, then press Enter for the next row. Press Enter on an empty row to finish.";
const drawingHint = "Let go on another box to connect it, or on an empty spot to make a new box.";

export function HintBar({ isTyping }: HintBarProps) {
  const isDrawing = useConnection((connection) => connection.inProgress);
  const hint = isDrawing ? drawingHint : isTyping ? typingHint : readyHint;

  return (
    <footer className={styles.bar} aria-live="polite">
      {hint}
    </footer>
  );
}
