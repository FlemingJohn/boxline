export type SyncStatus =
  | "saved"
  | "saving"
  | "failed"
  | "missing"
  | "needsAccess"
  | "unreadable"
  | "conflict"
  | "unsynced";
