import type { SyncStatus } from "@/types/saving/SyncStatus";

export function getSyncStatusFromError(error: unknown): SyncStatus {
  const errorName = error instanceof Error ? error.name : "";
  if (errorName === "NotFoundError") return "missing";
  if (errorName === "NotAllowedError" || errorName === "SecurityError") return "needsAccess";
  return "failed";
}
