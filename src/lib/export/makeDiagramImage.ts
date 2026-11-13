import type { Rect } from "@xyflow/react";
import { toPng, toSvg } from "html-to-image";
import { exportPadding } from "@/lib/export/exportPadding";
import { isExportedElement } from "@/lib/export/isExportedElement";
import { readColourToken } from "@/lib/export/readColourToken";
import { withLightTheme } from "@/lib/export/withLightTheme";
import { withWholeLineArea } from "@/lib/export/withWholeLineArea";
import { withWrittenSvgStyles } from "@/lib/export/withWrittenSvgStyles";
import type { ImageFormat } from "@/types/export/ImageFormat";

export function makeDiagramImage(format: ImageFormat, bounds: Rect): Promise<Blob> {
  const viewport = document.querySelector<HTMLElement>(".react-flow__viewport");
  if (!viewport) return Promise.reject(new Error("The diagram isn't on the screen."));
  const drawImage = async () => {
    const width = Math.ceil(bounds.width + exportPadding * 2);
    const height = Math.ceil(bounds.height + exportPadding * 2);
    const options = {
      width,
      height,
      pixelRatio: 2,
      backgroundColor: readColourToken("--color-surface"),
      filter: isExportedElement,
      style: {
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${exportPadding - bounds.x}px, ${exportPadding - bounds.y}px) scale(1)`,
      },
    };
    const imageAddress = format === "png" ? await toPng(viewport, options) : await toSvg(viewport, options);
    return (await fetch(imageAddress)).blob();
  };
  return withLightTheme(() => withWholeLineArea(bounds, () => withWrittenSvgStyles(viewport, drawImage)));
}
