import { diagramFileTypes } from "@/lib/saving/diagramFileTypes";

export function chooseSaveLocation(
  suggestedName: string,
  fileBesideChoice: FileSystemFileHandle | null = null,
): Promise<FileSystemFileHandle> {
  const startingPlace = fileBesideChoice
    ? { startIn: fileBesideChoice }
    : { id: "boxline-diagrams", startIn: "documents" as const };
  return window.showSaveFilePicker({ ...startingPlace, suggestedName, types: diagramFileTypes });
}
