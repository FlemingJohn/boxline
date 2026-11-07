import { InvalidDiagramFileError } from "@/lib/saving/InvalidDiagramFileError";

export function getOpenErrorMessage(error: unknown): string {
  if (error instanceof InvalidDiagramFileError) {
    return "This file isn't a Boxline diagram, or its contents are damaged. Your file wasn't changed.";
  }
  const errorName = error instanceof Error ? error.name : "";
  if (errorName === "NotFoundError") {
    return "The file was moved, renamed or deleted. Go home and open it from its new place.";
  }
  if (errorName === "NotAllowedError" || errorName === "SecurityError") {
    return "Boxline needs permission to edit that file. Try again and press Allow.";
  }
  return "That didn't work. Try again, or choose another location.";
}
