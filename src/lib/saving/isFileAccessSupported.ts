export function isFileAccessSupported(): boolean {
  return window.isSecureContext && "showSaveFilePicker" in window;
}
