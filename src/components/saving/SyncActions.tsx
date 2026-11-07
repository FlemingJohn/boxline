import { FileCheck, KeyRound, RotateCw, Save } from "lucide-react";
import { useState } from "react";
import { ReplaceDialog } from "@/components/saving/ReplaceDialog";
import { Button } from "@/components/shared/Button";
import { Icon } from "@/components/shared/Icon";
import { useIsFileAccessSupported } from "@/hooks/useIsFileAccessSupported";
import type { SyncStatusLabelProps } from "@/types/components/SyncStatusLabelProps";

export function SyncActions({ syncState, fileSync }: SyncStatusLabelProps) {
  const isSupported = useIsFileAccessSupported();
  const [isConfirmingReplace, setIsConfirmingReplace] = useState(false);
  const { status } = syncState;

  const replaceFile = () => {
    setIsConfirmingReplace(false);
    void fileSync.keepMyVersion();
  };

  return (
    <>
      {status === "unsynced" && isSupported && (
        <Button variant="plain" onClick={fileSync.saveToNewFile}><Icon shape={Save} />Save</Button>
      )}
      {status === "missing" && (
        <Button variant="plain" onClick={fileSync.saveToNewFile}><Icon shape={Save} />Save again</Button>
      )}
      {status === "needsAccess" && (
        <Button variant="plain" onClick={fileSync.allowAccess}><Icon shape={KeyRound} />Allow access</Button>
      )}
      {status === "failed" && (
        <Button variant="plain" onClick={fileSync.saveNow}><Icon shape={RotateCw} />Try again</Button>
      )}
      {status === "unreadable" && (
        <Button variant="plain" onClick={() => setIsConfirmingReplace(true)}>
          <Icon shape={FileCheck} />Replace with my version
        </Button>
      )}
      {isConfirmingReplace && <ReplaceDialog onReplace={replaceFile} onCancel={() => setIsConfirmingReplace(false)} />}
    </>
  );
}
