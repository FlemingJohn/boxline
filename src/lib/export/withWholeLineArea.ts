import type { Rect } from "@xyflow/react";
import { exportPadding } from "@/lib/export/exportPadding";

export async function withWholeLineArea<Result>(bounds: Rect, task: () => Promise<Result>): Promise<Result> {
  const lineAreas = [...document.querySelectorAll<SVGSVGElement>(".react-flow__edges svg")];
  const savedAttributes = lineAreas.map((area) => ({ area, viewBox: area.getAttribute("viewBox"), style: area.getAttribute("style") }));
  const left = bounds.x - exportPadding;
  const top = bounds.y - exportPadding;
  const width = bounds.width + exportPadding * 2;
  const height = bounds.height + exportPadding * 2;
  for (const area of lineAreas) {
    area.setAttribute("viewBox", `${left} ${top} ${width} ${height}`);
    area.style.setProperty("left", `${left}px`);
    area.style.setProperty("top", `${top}px`);
    area.style.setProperty("width", `${width}px`);
    area.style.setProperty("height", `${height}px`);
  }
  try {
    return await task();
  } finally {
    for (const { area, viewBox, style } of savedAttributes) {
      if (viewBox) area.setAttribute("viewBox", viewBox);
      else area.removeAttribute("viewBox");
      if (style) area.setAttribute("style", style);
      else area.removeAttribute("style");
    }
  }
}
