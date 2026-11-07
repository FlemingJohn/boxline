import { chooseSaveLocation } from "@/lib/saving/chooseSaveLocation";
import { emptyDiagramContent } from "@/lib/saving/emptyDiagramContent";
import { makeDiagramFileText } from "@/lib/saving/makeDiagramFileText";
import { writeFileText } from "@/lib/saving/writeFileText";
import type { DiagramRules } from "@/types/diagram/DiagramRules";

export async function createDiagramFile(rules: DiagramRules): Promise<FileSystemFileHandle> {
  const fileHandle = await chooseSaveLocation(rules.defaultFileName);
  await writeFileText(fileHandle, makeDiagramFileText(rules.kind, emptyDiagramContent));
  return fileHandle;
}
