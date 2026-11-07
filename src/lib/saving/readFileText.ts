export async function readFileText(fileHandle: FileSystemFileHandle): Promise<string> {
  const file = await fileHandle.getFile();
  return file.text();
}
