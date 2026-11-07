export async function requestWriteAccess(handle: FileSystemHandle): Promise<boolean> {
  const currentState = await handle.queryPermission({ mode: "readwrite" });
  if (currentState === "granted") return true;
  return (await handle.requestPermission({ mode: "readwrite" })) === "granted";
}
