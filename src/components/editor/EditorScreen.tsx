"use client";

import { ReactFlowProvider } from "@xyflow/react";
import { useState } from "react";
import { EditorWorkspace } from "@/components/editor/EditorWorkspace";
import { GuideDialog } from "@/components/guide/GuideDialog";
import { ContinueDialog } from "@/components/saving/ContinueDialog";
import { SaveQuestionDialog } from "@/components/saving/SaveQuestionDialog";
import { useGuideProgress } from "@/hooks/useGuideProgress";
import { DiagramRulesContext } from "@/lib/diagram/DiagramRulesContext";
import { getDiagramRules } from "@/lib/diagram/getDiagramRules";
import type { EditorScreenProps } from "@/types/components/EditorScreenProps";
import type { DiagramSession } from "@/types/saving/DiagramSession";

export function EditorScreen({ kind, startsFromLastDiagram }: EditorScreenProps) {
  const rules = getDiagramRules(kind);
  const { hasLoaded, hasFinished, finishGuide } = useGuideProgress();
  const [session, setSession] = useState<DiagramSession | null>(null);

  if (!hasLoaded) return null;
  if (!hasFinished) return <GuideDialog finishLabel="Start drawing" showsWelcome onFinish={finishGuide} />;

  return (
    <DiagramRulesContext value={rules}>
      <ReactFlowProvider>
        {session && <EditorWorkspace session={session} rules={rules} />}
        {!session && startsFromLastDiagram && <ContinueDialog kind={kind} onStart={setSession} />}
        {!session && !startsFromLastDiagram && <SaveQuestionDialog rules={rules} onStart={setSession} />}
      </ReactFlowProvider>
    </DiagramRulesContext>
  );
}
