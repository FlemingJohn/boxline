export function getDiagramName(fileName: string): string {
  return fileName.replace(/(\.boxline)?\.json$/i, "");
}
