import { useState } from "react";

export function useDiagramRename(currentName: string, onRename: (newName: string) => void) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftName, setDraftName] = useState(currentName);

  const startEditing = () => {
    setDraftName(currentName);
    setIsEditing(true);
  };

  const cancelEditing = () => setIsEditing(false);

  const confirmName = () => {
    const newName = draftName.trim();
    setIsEditing(false);
    if (newName !== "" && newName !== currentName) onRename(newName);
  };

  return { isEditing, draftName, setDraftName, startEditing, cancelEditing, confirmName };
}
