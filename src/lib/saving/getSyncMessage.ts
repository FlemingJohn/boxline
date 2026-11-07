import type { SyncState } from "@/types/saving/SyncState";

export function getSyncMessage({ status }: SyncState): string {
  const messages = {
    saved: "Synced",
    saving: "Syncing...",
    failed: "Couldn't save. Your work is backed up in this browser. Check the disk has space and the file isn't locked.",
    missing: "The file was moved, renamed or deleted. Your work is backed up in this browser.",
    needsAccess: "Boxline needs permission to save. Your work is backed up in this browser.",
    unreadable: "The file on disk can't be read. Nothing was overwritten.",
    conflict: "The file changed outside Boxline.",
    unsynced: "Not saved",
  };
  return messages[status];
}
