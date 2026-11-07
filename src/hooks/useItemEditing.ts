import { useInternalNode } from "@xyflow/react";
import { useState, type FocusEvent } from "react";
import { useItemData } from "@/hooks/useItemData";
import { useItemFieldKeys } from "@/hooks/useItemFieldKeys";
import { nameFieldId } from "@/lib/diagram/nameFieldId";
import type { DiagramItemData } from "@/types/diagram/DiagramItemData";

export function useItemEditing(itemId: string, data: DiagramItemData) {
  const itemData = useItemData(itemId, data);
  const isMeasured = Boolean(useInternalNode(itemId)?.measured?.width);
  const [focusedFieldId, setFocusedFieldId] = useState(data.isNew ? nameFieldId : "");
  const fieldKeys = useItemFieldKeys(data, itemData, setFocusedFieldId);

  const shouldFocusField = (fieldId: string) => isMeasured && focusedFieldId === fieldId;

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    const nextFocus = event.relatedTarget;
    const staysInsideItem = nextFocus instanceof Node && event.currentTarget.contains(nextFocus);
    const windowLostFocus = document.activeElement === event.target;
    if (staysInsideItem || windowLostFocus) return;
    setFocusedFieldId("");
    itemData.finishItem();
  };

  return { ...itemData, ...fieldKeys, shouldFocusField, setFocusedFieldId, handleBlur };
}
