export async function getFileStamp(fileHandle: FileSystemFileHandle): Promise<string> {
  const file = await fileHandle.getFile();
  return `${file.lastModified}:${file.size}`;
}
