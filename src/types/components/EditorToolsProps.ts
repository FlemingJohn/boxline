import type { UndoHistory } from "@/lib/history/UndoHistory";
import type { ImageFormat } from "@/types/export/ImageFormat";

export type EditorToolsProps = {
  history: UndoHistory;
  exportErrorMessage: string;
  onExport: (format: ImageFormat) => void;
};
