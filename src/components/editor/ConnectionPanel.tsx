import { Panel, useReactFlow } from "@xyflow/react";
import { ArrowLeftRight, Trash2 } from "lucide-react";
import { ClassLineOptions } from "@/components/editor/ClassLineOptions";
import { TableLineOptions } from "@/components/editor/TableLineOptions";
import { Button } from "@/components/shared/Button";
import { Icon } from "@/components/shared/Icon";
import { useDiagramRules } from "@/hooks/useDiagramRules";
import { defaultConnectionData } from "@/lib/diagram/defaultConnectionData";
import styles from "@/styles/editor/ConnectionPanel.module.css";
import type { ConnectionPanelProps } from "@/types/components/ConnectionPanelProps";

export function ConnectionPanel({ connections, onUpdateConnection, onFlipConnection }: ConnectionPanelProps) {
  const rules = useDiagramRules();
  const { deleteElements } = useReactFlow();
  const selectedConnection = connections.find((connection) => connection.selected);
  if (!selectedConnection) return null;

  const { id } = selectedConnection;
  const data = selectedConnection.data ?? defaultConnectionData;
  const LineOptions = rules.kind === "class" ? ClassLineOptions : TableLineOptions;

  return (
    <Panel position="top-right" className={styles.panel} aria-label="Line settings">
      <h2 className={styles.title}>Line</h2>
      <LineOptions data={data} onChange={(changes) => onUpdateConnection(id, changes)} />
      <div className={styles.actions}>
        <Button variant="plain" onClick={() => onFlipConnection(id)}><Icon shape={ArrowLeftRight} />Flip direction</Button>
        <Button variant="plain" onClick={() => deleteElements({ edges: [{ id }] })}><Icon shape={Trash2} />Remove line</Button>
      </div>
    </Panel>
  );
}
