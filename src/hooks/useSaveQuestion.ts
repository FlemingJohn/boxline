import { useState } from "react";
import { createDiagramFile } from "@/lib/saving/createDiagramFile";
import { getOpenErrorMessage } from "@/lib/saving/getOpenErrorMessage";
import { makeUnsavedSession } from "@/lib/saving/makeUnsavedSession";
import { openDiagramSession } from "@/lib/saving/openDiagramSession";
import { rememberLastDiagram } from "@/lib/saving/rememberLastDiagram";
import type { DiagramRules } from "@/types/diagram/DiagramRules";
import type { DiagramSession } from "@/types/saving/DiagramSession";

export function useSaveQuestion(rules: DiagramRules, onStart: (session: DiagramSession) => void) {
  const [errorMessage, setErrorMessage] = useState("");

  const answerYes = async () => {
    setErrorMessage("");
    try {
      const fileHandle = await createDiagramFile(rules);
      await rememberLastDiagram({ kind: rules.kind, fileHandle });
      onStart(await openDiagramSession(rules.kind, fileHandle));
    } catch (error) {
      const wasCancelled = error instanceof Error && error.name === "AbortError";
      if (!wasCancelled) setErrorMessage(getOpenErrorMessage(error));
    }
  };

  const answerNotNow = () => onStart(makeUnsavedSession(rules.kind));

  return { errorMessage, answerYes, answerNotNow };
}
