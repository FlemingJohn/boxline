export function isExportedElement(element: HTMLElement): boolean {
  return !(element instanceof Element && element.hasAttribute("data-export-hidden"));
}
