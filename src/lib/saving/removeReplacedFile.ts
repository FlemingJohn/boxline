type RemovableFileHandle = FileSystemFileHandle & { remove?: () => Promise<void> };

export async function removeReplacedFile(
  replacedFile: RemovableFileHandle,
  newFile: FileSystemFileHandle,
): Promise<void> {
  if (await replacedFile.isSameEntry(newFile)) return;
  await replacedFile.remove?.().catch(() => undefined);
}
