import type { useItemData } from "@/hooks/useItemData";
import { nameFieldId } from "@/lib/diagram/nameFieldId";
import type { DiagramItemData } from "@/types/diagram/DiagramItemData";
import type { ItemRow } from "@/types/diagram/ItemRow";

export function useItemFieldKeys(
  data: DiagramItemData,
  itemData: ReturnType<typeof useItemData>,
  setFocusedFieldId: (fieldId: string) => void,
) {
  const handleNameEnter = (input: HTMLInputElement) => {
    if (data.name.trim() === "") input.blur();
    else setFocusedFieldId(data.rows[0]?.id ?? itemData.insertRowAfter(-1).id);
  };

  const handleRowEnter = (row: ItemRow, rowIndex: number, input: HTMLInputElement) => {
    if (row.text.trim() === "") input.blur();
    else setFocusedFieldId(itemData.insertRowAfter(rowIndex).id);
  };

  const handleRowBackspace = (row: ItemRow, rowIndex: number) => {
    setFocusedFieldId(data.rows[rowIndex - 1]?.id ?? nameFieldId);
    itemData.removeRow(row.id);
  };

  return { handleNameEnter, handleRowEnter, handleRowBackspace };
}
