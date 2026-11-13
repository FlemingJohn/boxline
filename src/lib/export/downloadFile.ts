export function downloadFile(file: Blob, fileName: string): void {
  const address = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = address;
  link.download = fileName;
  link.click();
  setTimeout(() => URL.revokeObjectURL(address), 1000);
}
