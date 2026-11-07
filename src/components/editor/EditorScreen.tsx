"use client";

import { ReactFlowProvider } from "@xyflow/react";
import { DiagramCanvas } from "@/components/editor/DiagramCanvas";
import { EditorTopBar } from "@/components/editor/EditorTopBar";
import { HintBar } from "@/components/editor/HintBar";
import { useIsTyping } from "@/hooks/useIsTyping";
import { DiagramRulesContext } from "@/lib/diagram/DiagramRulesContext";
import { getDiagramRules } from "@/lib/diagram/getDiagramRules";
import styles from "@/styles/editor/EditorScreen.module.css";
import type { EditorScreenProps } from "@/types/components/EditorScreenProps";

export function EditorScreen({ kind }: EditorScreenProps) {
  const rules = getDiagramRules(kind);
  const { isTyping, handleFocus, handleBlur } = useIsTyping();

  return (
    <DiagramRulesContext value={rules}>
      <ReactFlowProvider>
        <div className={styles.screen}>
          <EditorTopBar label={rules.label} />
          <main className={styles.canvasArea} onFocus={handleFocus} onBlur={handleBlur}>
            <DiagramCanvas />
          </main>
          <HintBar isTyping={isTyping} />
        </div>
      </ReactFlowProvider>
    </DiagramRulesContext>
  );
}
