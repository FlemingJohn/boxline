"use client";

import { ArrowRight, FolderOpen } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Icon } from "@/components/shared/Icon";
import { useIsFileAccessSupported } from "@/hooks/useIsFileAccessSupported";
import { useSavedDiagrams } from "@/hooks/useSavedDiagrams";
import { getDiagramName } from "@/lib/saving/getDiagramName";
import styles from "@/styles/landing/SavedDiagramActions.module.css";

export function SavedDiagramActions() {
  const isSupported = useIsFileAccessSupported();
  const { lastDiagram, errorMessage, continueLastDiagram, openSavedFile } = useSavedDiagrams();

  if (!isSupported) return null;

  return (
    <div className={styles.actions}>
      {lastDiagram && (
        <Button variant="plain" onClick={continueLastDiagram}>
          <Icon shape={ArrowRight} />
          Continue {getDiagramName(lastDiagram.fileHandle.name)}
        </Button>
      )}
      <Button variant="plain" onClick={openSavedFile}>
        <Icon shape={FolderOpen} />
        Open a saved file
      </Button>
      {errorMessage && <p className={styles.error} role="alert">{errorMessage}</p>}
    </div>
  );
}
