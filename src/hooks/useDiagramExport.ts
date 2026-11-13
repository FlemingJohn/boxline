import { useReactFlow } from "@xyflow/react";
import { useEffect, useState } from "react";
import { getExportFileName } from "@/lib/export/getExportFileName";
import { makeDiagramImage } from "@/lib/export/makeDiagramImage";
import { saveImage } from "@/lib/export/saveImage";
import type { ImageFormat } from "@/types/export/ImageFormat";

const messageDuration = 4000;

export function useDiagramExport(fileName: string) {
  const { getNodes, getNodesBounds, setNodes, setEdges } = useReactFlow();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!errorMessage) return;
    const timer = setTimeout(() => setErrorMessage(""), messageDuration);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  const exportImage = async (format: ImageFormat) => {
    setErrorMessage("");
    const items = getNodes();
    if (items.length === 0) return setErrorMessage("Add a box before exporting.");
    (document.activeElement as HTMLElement | null)?.blur();
    setNodes((currentItems) => currentItems.map((item) => ({ ...item, selected: false })));
    setEdges((currentLines) => currentLines.map((line) => ({ ...line, selected: false })));
    try {
      const image = await makeDiagramImage(format, getNodesBounds(items));
      await saveImage(image, getExportFileName(fileName, format), format);
    } catch (error) {
      if (!(error instanceof Error && error.name === "AbortError")) setErrorMessage("Export didn't work. Try again.");
    }
  };

  return { exportImage, errorMessage };
}
