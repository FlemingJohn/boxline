const forbiddenCharacters = /[<>:"/\\|?*\u0000-\u001f]/g;
const reservedWindowsNames = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;
const maximumNameLength = 100;

export function makeDiagramFileName(diagramName: string): string {
  const cleanName = diagramName
    .replace(forbiddenCharacters, "-")
    .slice(0, maximumNameLength)
    .replace(/[. ]+$/, "")
    .trim();
  const usableName = reservedWindowsNames.test(cleanName) ? `${cleanName} diagram` : cleanName;
  return `${usableName}.boxline.json`;
}
