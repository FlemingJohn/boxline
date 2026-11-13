import type { ImageFormat } from "@/types/export/ImageFormat";

export const imageFileTypes: Record<ImageFormat, FilePickerAcceptType> = {
  png: { description: "PNG image", accept: { "image/png": [".png"] } },
  svg: { description: "SVG image", accept: { "image/svg+xml": [".svg"] } },
};
