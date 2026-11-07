export async function writeFileText(fileHandle: FileSystemFileHandle, text: string): Promise<void> {
  const writable = await fileHandle.createWritable();
  try {
    await writable.write(text);
    await writable.close();
  } catch (error) {
    await writable.abort().catch(() => undefined);
    throw error;
  }
}
