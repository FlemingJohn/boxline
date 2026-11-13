import { useDiagramContent } from "@/hooks/useDiagramContent";
import { useDiagramExport } from "@/hooks/useDiagramExport";
import { useFileSync } from "@/hooks/useFileSync";
import { useUndoHistory } from "@/hooks/useUndoHistory";
import { getDiagramName } from "@/lib/saving/getDiagramName";
import { makeDiagramFileText } from "@/lib/saving/makeDiagramFileText";
import type { DiagramContent } from "@/types/diagram/DiagramContent";
import type { DiagramRules } from "@/types/diagram/DiagramRules";
import type { DiagramSession } from "@/types/saving/DiagramSession";

export function useEditorSession(session: DiagramSession, rules: DiagramRules) {
  const diagram = useDiagramContent(session.content);
  const content = { items: diagram.items, connections: diagram.connections };
  const history = useUndoHistory(session.kind, makeDiagramFileText(session.kind, content), diagram.replaceContent);

  const replaceFromFile = (fileContent: DiagramContent) => {
    diagram.replaceContent(fileContent);
    history.reset(makeDiagramFileText(session.kind, fileContent));
  };

  const { syncState, fileSync } = useFileSync(session, content, replaceFromFile);
  const fileName = syncState.fileName || rules.defaultFileName;
  const exporter = useDiagramExport(fileName);

  return { diagram, history, syncState, fileSync, diagramName: getDiagramName(fileName), exporter };
}
