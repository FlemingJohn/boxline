import { Redo2, Undo2 } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Icon } from "@/components/shared/Icon";
import { Tooltip } from "@/components/shared/Tooltip";
import type { HistoryButtonsProps } from "@/types/components/HistoryButtonsProps";

export function HistoryButtons({ history }: HistoryButtonsProps) {
  return (
    <>
      <Tooltip text="Undo (Ctrl+Z)">
        <Button variant="plain" label="Undo" isDisabled={!history.canUndo()} onClick={() => history.undo()}>
          <Icon shape={Undo2} />
        </Button>
      </Tooltip>
      <Tooltip text="Redo (Ctrl+Y)">
        <Button variant="plain" label="Redo" isDisabled={!history.canRedo()} onClick={() => history.redo()}>
          <Icon shape={Redo2} />
        </Button>
      </Tooltip>
    </>
  );
}
