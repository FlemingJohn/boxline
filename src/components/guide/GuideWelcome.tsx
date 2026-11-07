import { ArrowRight } from "lucide-react";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { Button } from "@/components/shared/Button";
import { Dialog } from "@/components/shared/Dialog";
import { Icon } from "@/components/shared/Icon";
import styles from "@/styles/guide/GuideDialog.module.css";
import type { GuideWelcomeProps } from "@/types/components/GuideWelcomeProps";

export function GuideWelcome({ onContinue }: GuideWelcomeProps) {
  return (
    <Dialog title="Welcome to Boxline" isWide>
      <ProductPreview />
      <p className={styles.text}>This short guide shows you how to draw your first diagram.</p>
      <div className={styles.controls}>
        <Button variant="primary" onClick={onContinue}><Icon shape={ArrowRight} />Show me how</Button>
      </div>
    </Dialog>
  );
}
