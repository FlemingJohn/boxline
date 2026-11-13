import { LineLabelField } from "@/components/editor/LineLabelField";
import { LinePreview } from "@/components/editor/LinePreview";
import { ChoiceButton } from "@/components/shared/ChoiceButton";
import { classLineChoices } from "@/lib/class-diagram/classLineChoices";
import { classLineLooks } from "@/lib/class-diagram/classLineLooks";
import styles from "@/styles/editor/ConnectionPanel.module.css";
import type { LineOptionsProps } from "@/types/components/LineOptionsProps";

export function ClassLineOptions({ data, onChange }: LineOptionsProps) {
  return (
    <>
      <div className={styles.choices} role="group" aria-label="Line type">
        {classLineChoices.map((choice) => (
          <ChoiceButton
            key={choice.type}
            isChosen={data.classLineType === choice.type}
            onClick={() => onChange({ classLineType: choice.type })}
          >
            <LinePreview look={classLineLooks[choice.type]} />
            {choice.label}
          </ChoiceButton>
        ))}
      </div>
      <div className={styles.labels}>
        <LineLabelField label="Start" value={data.startLabel} placeholder="1" onChange={(startLabel) => onChange({ startLabel })} />
        <LineLabelField label="Name" value={data.middleLabel} placeholder="places" onChange={(middleLabel) => onChange({ middleLabel })} />
        <LineLabelField label="End" value={data.endLabel} placeholder="0..*" onChange={(endLabel) => onChange({ endLabel })} />
      </div>
    </>
  );
}
