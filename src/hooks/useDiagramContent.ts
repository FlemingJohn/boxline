import { useDiagramConnections } from "@/hooks/useDiagramConnections";
import { useDiagramItems } from "@/hooks/useDiagramItems";
import type { DiagramContent } from "@/types/diagram/DiagramContent";

export function useDiagramContent(initialContent: DiagramContent) {
  const { items, handleItemsChange, addItemAt, replaceItems } = useDiagramItems(initialContent.items);
  const lines = useDiagramConnections(initialContent.connections);

  const replaceContent = (content: DiagramContent) => {
    replaceItems(content.items);
    lines.replaceConnections(content.connections);
  };

  return {
    items,
    connections: lines.connections,
    handleItemsChange,
    handleConnectionsChange: lines.handleConnectionsChange,
    addItemAt,
    addConnection: lines.addConnection,
    updateConnection: lines.updateConnection,
    flipConnection: lines.flipConnection,
    replaceContent,
  };
}
