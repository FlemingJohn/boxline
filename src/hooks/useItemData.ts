import { useReactFlow } from "@xyflow/react";
import { getFinishedRows } from "@/lib/diagram/getFinishedRows";
import { makeNewRow } from "@/lib/diagram/makeNewRow";
import type { DiagramItem } from "@/types/diagram/DiagramItem";
import type { DiagramItemData } from "@/types/diagram/DiagramItemData";

export function useItemData(itemId: string, data: DiagramItemData) {
  const { updateNodeData, deleteElements } = useReactFlow<DiagramItem>();

  const removeItem = () => {
    deleteElements({ nodes: [{ id: itemId }] });
  };

  const setName = (name: string) => {
    updateNodeData(itemId, { name });
  };

  const setRowText = (rowId: string, text: string) => {
    const rows = data.rows.map((row) => (row.id === rowId ? { ...row, text } : row));
    updateNodeData(itemId, { rows });
  };

  const insertRowAfter = (rowIndex: number) => {
    const newRow = makeNewRow();
    updateNodeData(itemId, { rows: data.rows.toSpliced(rowIndex + 1, 0, newRow) });
    return newRow;
  };

  const removeRow = (rowId: string) => {
    updateNodeData(itemId, { rows: data.rows.filter((row) => row.id !== rowId) });
  };

  const finishItem = () => {
    const rows = getFinishedRows(data.rows);
    if (data.name.trim() === "" && rows.length === 0) removeItem();
    else updateNodeData(itemId, { rows, isNew: false });
  };

  return { removeItem, setName, setRowText, insertRowAfter, removeRow, finishItem };
}
