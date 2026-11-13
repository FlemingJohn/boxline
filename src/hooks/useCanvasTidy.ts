import { useReactFlow } from "@xyflow/react";
import { useDiagramRules } from "@/hooks/useDiagramRules";
import { getTidyPositions } from "@/lib/diagram/getTidyPositions";
import type { DiagramCanvasProps } from "@/types/components/DiagramCanvasProps";

export function useCanvasTidy({ items, connections, onMoveItems }: DiagramCanvasProps) {
  const rules = useDiagramRules();
  const { fitView } = useReactFlow();

  const tidyUp = () => {
    if (items.length === 0) return;
    onMoveItems(getTidyPositions(items, connections, rules.getUpperAndLowerIds));
    requestAnimationFrame(() => fitView({ padding: 0.2, maxZoom: 1, duration: 300 }));
  };

  return tidyUp;
}
