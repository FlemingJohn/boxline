import type { ImageFormat } from "@/types/export/ImageFormat";

export type ExportMenuProps = {
  errorMessage: string;
  onExport: (format: ImageFormat) => void;
};
