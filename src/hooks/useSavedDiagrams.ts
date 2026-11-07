import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { chooseSavedFile } from "@/lib/saving/chooseSavedFile";
import { getDiagramFileKind } from "@/lib/saving/getDiagramFileKind";
import { getLastDiagram } from "@/lib/saving/getLastDiagram";
import { getOpenErrorMessage } from "@/lib/saving/getOpenErrorMessage";
import { InvalidDiagramFileError } from "@/lib/saving/InvalidDiagramFileError";
import { isFileAccessSupported } from "@/lib/saving/isFileAccessSupported";
import { readFileText } from "@/lib/saving/readFileText";
import { rememberLastDiagram } from "@/lib/saving/rememberLastDiagram";
import { requestWriteAccess } from "@/lib/saving/requestWriteAccess";
import type { LastDiagram } from "@/types/saving/LastDiagram";

export function useSavedDiagrams() {
  const router = useRouter();
  const [lastDiagram, setLastDiagram] = useState<LastDiagram | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isFileAccessSupported()) return;
    getLastDiagram().then(setLastDiagram).catch(() => undefined);
  }, []);

  const continueLastDiagram = async () => {
    if (!lastDiagram) return;
    await requestWriteAccess(lastDiagram.fileHandle).catch(() => false);
    router.push(`/editor/${lastDiagram.kind}/continue`);
  };

  const openSavedFile = async () => {
    setErrorMessage("");
    try {
      const fileHandle = await chooseSavedFile();
      const kind = getDiagramFileKind(await readFileText(fileHandle));
      if (!kind) throw new InvalidDiagramFileError();
      await requestWriteAccess(fileHandle).catch(() => false);
      await rememberLastDiagram({ kind, fileHandle });
      router.push(`/editor/${kind}/continue`);
    } catch (error) {
      const wasCancelled = error instanceof Error && error.name === "AbortError";
      if (!wasCancelled) setErrorMessage(getOpenErrorMessage(error));
    }
  };

  return { lastDiagram, errorMessage, continueLastDiagram, openSavedFile };
}
