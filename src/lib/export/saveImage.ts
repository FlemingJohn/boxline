import { downloadFile } from "@/lib/export/downloadFile";
import { imageFileTypes } from "@/lib/export/imageFileTypes";
import type { ImageFormat } from "@/types/export/ImageFormat";

export async function saveImage(image: Blob, fileName: string, format: ImageFormat): Promise<void> {
  if (!("showSaveFilePicker" in window)) return downloadFile(image, fileName);
  const fileHandle = await window.showSaveFilePicker({
    id: "boxline-images",
    startIn: "pictures",
    suggestedName: fileName,
    types: [imageFileTypes[format]],
  });
  const writable = await fileHandle.createWritable();
  await writable.write(image);
  await writable.close();
}
