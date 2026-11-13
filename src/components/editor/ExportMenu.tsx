import { Download, FileCode2, Image } from "lucide-react";
import { useState, type FocusEvent } from "react";
import { Button } from "@/components/shared/Button";
import { Icon } from "@/components/shared/Icon";
import { Tooltip } from "@/components/shared/Tooltip";
import styles from "@/styles/editor/ExportMenu.module.css";
import type { ExportMenuProps } from "@/types/components/ExportMenuProps";
import type { ImageFormat } from "@/types/export/ImageFormat";

export function ExportMenu({ errorMessage, onExport }: ExportMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const choose = (format: ImageFormat) => {
    setIsOpen(false);
    onExport(format);
  };

  const closeWhenLeaving = (event: FocusEvent<HTMLElement>) => {
    const nextFocus = event.relatedTarget;
    if (!(nextFocus instanceof Node && event.currentTarget.contains(nextFocus))) setIsOpen(false);
  };

  return (
    <div className={styles.holder} onBlur={closeWhenLeaving}>
      <Tooltip text="Save the diagram as an image" alignment="end">
        <Button variant="plain" onClick={() => setIsOpen(!isOpen)}><Icon shape={Download} />Export</Button>
      </Tooltip>
      {isOpen && (
        <div className={styles.menu} role="group" aria-label="Export as">
          <Button variant="plain" onClick={() => choose("png")}><Icon shape={Image} />PNG image</Button>
          <Button variant="plain" onClick={() => choose("svg")}><Icon shape={FileCode2} />SVG image</Button>
        </div>
      )}
      {errorMessage && !isOpen && <p className={styles.error} role="alert">{errorMessage}</p>}
    </div>
  );
}
