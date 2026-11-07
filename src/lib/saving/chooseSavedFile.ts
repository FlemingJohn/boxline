import { diagramFileTypes } from "@/lib/saving/diagramFileTypes";

export async function chooseSavedFile(): Promise<FileSystemFileHandle> {
  const [fileHandle] = await window.showOpenFilePicker({
    id: "boxline-diagrams",
    startIn: "documents",
    types: diagramFileTypes,
  });
  return fileHandle;
}
