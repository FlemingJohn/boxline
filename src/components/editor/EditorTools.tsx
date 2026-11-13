import { ExportMenu } from "@/components/editor/ExportMenu";
import { HistoryButtons } from "@/components/editor/HistoryButtons";
import { ThemeButton } from "@/components/editor/ThemeButton";
import type { EditorToolsProps } from "@/types/components/EditorToolsProps";

export function EditorTools({ history, exportErrorMessage, onExport }: EditorToolsProps) {
  return (
    <>
      <HistoryButtons history={history} />
      <ExportMenu errorMessage={exportErrorMessage} onExport={onExport} />
      <ThemeButton />
    </>
  );
}
