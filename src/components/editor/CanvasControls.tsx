import { Panel, useReactFlow, useViewport } from "@xyflow/react";
import { LayoutGrid, Maximize, Minus, Plus } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Icon } from "@/components/shared/Icon";
import styles from "@/styles/editor/CanvasControls.module.css";
import type { CanvasControlsProps } from "@/types/components/CanvasControlsProps";

export function CanvasControls({ onTidy }: CanvasControlsProps) {
  const { zoom } = useViewport();
  const { zoomIn, zoomOut, zoomTo, fitView } = useReactFlow();

  return (
    <Panel position="bottom-left" className={styles.controls} data-export-hidden="true">
      <Button variant="plain" onClick={onTidy}><Icon shape={LayoutGrid} />Tidy up</Button>
      <span className={styles.zoom} role="group" aria-label="Zoom">
        <Button variant="plain" label="Zoom out" onClick={() => zoomOut({ duration: 150 })}><Icon shape={Minus} /></Button>
        <Button variant="plain" label="Reset zoom to 100%" onClick={() => zoomTo(1, { duration: 150 })}>
          {Math.round(zoom * 100)}%
        </Button>
        <Button variant="plain" label="Zoom in" onClick={() => zoomIn({ duration: 150 })}><Icon shape={Plus} /></Button>
        <Button variant="plain" label="Fit to screen" onClick={() => fitView({ padding: 0.2, maxZoom: 1, duration: 200 })}>
          <Icon shape={Maximize} />
        </Button>
      </span>
    </Panel>
  );
}
