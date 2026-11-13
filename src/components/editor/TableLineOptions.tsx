import { LineLabelField } from "@/components/editor/LineLabelField";
import { TableEndChoices } from "@/components/editor/TableEndChoices";
import type { LineOptionsProps } from "@/types/components/LineOptionsProps";

export function TableLineOptions({ data, onChange }: LineOptionsProps) {
  return (
    <>
      <TableEndChoices label="Start of line" chosenEnd={data.startEnd} onChoose={(startEnd) => onChange({ startEnd })} />
      <TableEndChoices label="End of line" chosenEnd={data.endEnd} onChoose={(endEnd) => onChange({ endEnd })} />
      <LineLabelField label="Name" value={data.middleLabel} placeholder="places" onChange={(middleLabel) => onChange({ middleLabel })} />
    </>
  );
}
