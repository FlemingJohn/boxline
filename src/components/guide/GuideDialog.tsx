import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { GuideImage } from "@/components/guide/GuideImage";
import { GuideWelcome } from "@/components/guide/GuideWelcome";
import { Button } from "@/components/shared/Button";
import { Dialog } from "@/components/shared/Dialog";
import { Icon } from "@/components/shared/Icon";
import { guideSteps } from "@/lib/guide/guideSteps";
import styles from "@/styles/guide/GuideDialog.module.css";
import type { GuideDialogProps } from "@/types/components/GuideDialogProps";

export function GuideDialog({ finishLabel, showsWelcome = false, onFinish }: GuideDialogProps) {
  const [isOnWelcome, setIsOnWelcome] = useState(showsWelcome);
  const [stepIndex, setStepIndex] = useState(0);
  const step = guideSteps[stepIndex];
  const isLastStep = stepIndex === guideSteps.length - 1;

  if (isOnWelcome) return <GuideWelcome onContinue={() => setIsOnWelcome(false)} />;

  return (
    <Dialog title={step.title} isWide>
      <GuideImage key={step.id} step={step} />
      <p className={styles.text}>{step.text}</p>
      <div className={styles.controls}>
        <span className={styles.progress}>Step {stepIndex + 1} of {guideSteps.length}</span>
        {stepIndex > 0 && (
          <Button variant="plain" onClick={() => setStepIndex(stepIndex - 1)}><Icon shape={ArrowLeft} />Back</Button>
        )}
        {isLastStep ? (
          <Button variant="primary" onClick={onFinish}><Icon shape={Check} />{finishLabel}</Button>
        ) : (
          <Button variant="primary" onClick={() => setStepIndex(stepIndex + 1)}><Icon shape={ArrowRight} />Next</Button>
        )}
      </div>
    </Dialog>
  );
}
