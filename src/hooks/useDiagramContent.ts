import { useDiagramConnections } from "@/hooks/useDiagramConnections";
import { useDiagramItems } from "@/hooks/useDiagramItems";
import type { DiagramContent } from "@/types/diagram/DiagramContent";

export function useDiagramContent(initialContent: DiagramContent) {
  const { items, handleItemsChange, addItemAt, replaceItems } = useDiagramItems(initialContent.items);
  const { connections, handleConnectionsChange, addConnection, replaceConnections } =
    useDiagramConnections(initialContent.connections);

  const replaceContent = (content: DiagramContent) => {
    replaceItems(content.items);
    replaceConnections(content.connections);
  };

  return { items, connections, handleItemsChange, handleConnectionsChange, addItemAt, addConnection, replaceContent };
}
