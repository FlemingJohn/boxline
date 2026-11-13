import { getDiagramName } from "@/lib/saving/getDiagramName";
import type { ImageFormat } from "@/types/export/ImageFormat";

export function getExportFileName(fileName: string, format: ImageFormat): string {
  return `${getDiagramName(fileName)}.${format}`;
}
