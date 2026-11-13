import type { KeyboardEvent } from "react";
import { RowMarkerIcon } from "@/components/editor/RowMarkerIcon";
import { RowMirror } from "@/components/editor/RowMirror";
import { useRowFieldFocus } from "@/hooks/useRowFieldFocus";
import styles from "@/styles/editor/RowField.module.css";
import type { RowFieldProps } from "@/types/components/RowFieldProps";

export function RowField(props: RowFieldProps) {
  const { variant, value, placeholder, parts, section, marker, isEmphasised, onChange } = props;
  const { inputRef, isFocused, handleFocus, handleBlur, handleClick } = useRowFieldFocus(props.shouldFocus, props.onFocus);
  const showsMirror = Boolean(parts) && !isFocused && value !== "";
  const holderClasses = [styles[variant], section ? styles[section] : "", isEmphasised ? styles.emphasised : ""];
  const inputClasses = [styles.input, isFocused ? "nodrag" : "", showsMirror ? styles.hiddenText : ""];

  return (
    <div className={holderClasses.join(" ")} onClick={handleClick}>
      {marker !== undefined && <RowMarkerIcon marker={marker} />}
      <span className={styles.field}>
        <input
          ref={inputRef}
          className={inputClasses.join(" ")}
          type="text"
          value={value}
          placeholder={placeholder}
          aria-label={placeholder}
          autoComplete="off"
          spellCheck={false}
          onChange={(event) => onChange(event.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={(event) => handleFieldKey(event, props)}
        />
        {showsMirror && parts && <RowMirror parts={parts} />}
      </span>
    </div>
  );
}

function handleFieldKey(event: KeyboardEvent<HTMLInputElement>, props: RowFieldProps) {
  if (event.key === "Enter") {
    event.preventDefault();
    props.onEnter(event.currentTarget);
  }
  if (event.key === "Escape") event.currentTarget.blur();
  if (event.key === "Backspace" && props.value === "" && props.onBackspaceWhenEmpty) {
    event.preventDefault();
    props.onBackspaceWhenEmpty();
  }
}
