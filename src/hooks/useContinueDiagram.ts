import { useEffect, useState } from "react";
import { forgetLastDiagram } from "@/lib/saving/forgetLastDiagram";
import { getLastDiagram } from "@/lib/saving/getLastDiagram";
import { getOpenErrorMessage } from "@/lib/saving/getOpenErrorMessage";
import { openDiagramSession } from "@/lib/saving/openDiagramSession";
import { requestWriteAccess } from "@/lib/saving/requestWriteAccess";
import type { DiagramKind } from "@/types/diagram/DiagramKind";
import type { ContinueStep } from "@/types/saving/ContinueStep";
import type { DiagramSession } from "@/types/saving/DiagramSession";

export function useContinueDiagram(kind: DiagramKind, onStart: (session: DiagramSession) => void) {
  const [step, setStep] = useState<ContinueStep>("checking");
  const [fileHandle, setFileHandle] = useState<FileSystemFileHandle | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let isCurrent = true;
    const showProblem = (problem: string) => {
      setMessage(problem);
      setStep("problem");
    };
    const loadLastDiagram = async () => {
      const lastDiagram = await getLastDiagram().catch(() => null);
      if (!isCurrent) return;
      if (lastDiagram?.kind !== kind) return showProblem("There's no saved diagram to continue here.");
      setFileHandle(lastDiagram.fileHandle);
      const permission = await lastDiagram.fileHandle.queryPermission({ mode: "readwrite" });
      if (!isCurrent) return;
      if (permission !== "granted") return setStep("needsAccess");
      const problem = await openLastFile(kind, lastDiagram.fileHandle, onStart);
      if (problem && isCurrent) showProblem(problem);
    };
    void loadLastDiagram();
    return () => {
      isCurrent = false;
    };
  }, [kind, onStart]);

  const allowAccess = async () => {
    if (!fileHandle) return;
    const isAllowed = await requestWriteAccess(fileHandle).catch(() => false);
    const problem = isAllowed
      ? await openLastFile(kind, fileHandle, onStart)
      : "Boxline can't keep this diagram synced without permission. Press Allow access to try again.";
    setMessage(problem);
  };

  return { step, fileName: fileHandle?.name ?? "", message, allowAccess };
}

async function openLastFile(
  kind: DiagramKind,
  fileHandle: FileSystemFileHandle,
  onStart: (session: DiagramSession) => void,
): Promise<string> {
  try {
    onStart(await openDiagramSession(kind, fileHandle));
    return "";
  } catch (error) {
    if (error instanceof DOMException && error.name === "NotFoundError") await forgetLastDiagram();
    return getOpenErrorMessage(error);
  }
}
