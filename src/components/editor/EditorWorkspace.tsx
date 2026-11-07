import { useRouter } from "next/navigation";
import { useState } from "react";
import { DiagramCanvas } from "@/components/editor/DiagramCanvas";
import { EditorTopBar } from "@/components/editor/EditorTopBar";
import { HintBar } from "@/components/editor/HintBar";
import { GuideDialog } from "@/components/guide/GuideDialog";
import { ConflictDialog } from "@/components/saving/ConflictDialog";
import { LeaveDialog } from "@/components/saving/LeaveDialog";
import { SyncStatusLabel } from "@/components/saving/SyncStatusLabel";
import { useDiagramContent } from "@/hooks/useDiagramContent";
import { useFileSync } from "@/hooks/useFileSync";
import { useIsTyping } from "@/hooks/useIsTyping";
import { getDiagramName } from "@/lib/saving/getDiagramName";
import styles from "@/styles/editor/EditorScreen.module.css";
import type { EditorWorkspaceProps } from "@/types/components/EditorWorkspaceProps";

export function EditorWorkspace({ session, rules }: EditorWorkspaceProps) {
  const router = useRouter();
  const diagram = useDiagramContent(session.content);
  const { items, connections } = diagram;
  const { syncState, fileSync } = useFileSync(session, { items, connections }, diagram.replaceContent);
  const { isTyping, handleFocus, handleBlur } = useIsTyping();
  const [isAskingToLeave, setIsAskingToLeave] = useState(false);
  const [isShowingHelp, setIsShowingHelp] = useState(false);
  const diagramName = getDiagramName(syncState.fileName || rules.defaultFileName);

  const handleHomeNavigate = (event: { preventDefault: () => void }) => {
    if (syncState.status !== "unsynced" || !fileSync.hasUnsavedChanges()) return;
    event.preventDefault();
    setIsAskingToLeave(true);
  };

  const saveAfterAsking = () => {
    setIsAskingToLeave(false);
    void fileSync.saveToNewFile();
  };

  return (
    <div className={styles.screen}>
      <EditorTopBar
        label={rules.label}
        diagramName={diagramName}
        onRename={fileSync.rename}
        onHelp={() => setIsShowingHelp(true)}
        onHomeNavigate={handleHomeNavigate}
      >
        <SyncStatusLabel syncState={syncState} fileSync={fileSync} />
      </EditorTopBar>
      <main className={styles.canvasArea} onFocus={handleFocus} onBlur={handleBlur}>
        <DiagramCanvas
          items={items}
          connections={connections}
          onItemsChange={diagram.handleItemsChange}
          onConnectionsChange={diagram.handleConnectionsChange}
          onAddItem={diagram.addItemAt}
          onAddConnection={diagram.addConnection}
        />
      </main>
      <HintBar isTyping={isTyping} />
      {syncState.status === "conflict" && (
        <ConflictDialog onKeepMine={fileSync.keepMyVersion} onTakeFile={fileSync.takeFileVersion} />
      )}
      {isAskingToLeave && (
        <LeaveDialog onSave={saveAfterAsking} onLeave={() => router.push("/")} onStay={() => setIsAskingToLeave(false)} />
      )}
      {isShowingHelp && <GuideDialog finishLabel="Done" onFinish={() => setIsShowingHelp(false)} />}
    </div>
  );
}
