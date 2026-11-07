export function isTextFieldFocused(): boolean {
  return document.activeElement instanceof HTMLInputElement;
}
