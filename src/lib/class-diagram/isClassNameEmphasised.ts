export function isClassNameEmphasised(name: string): boolean {
  return /^<<[^>]+>>/.test(name.trim());
}
