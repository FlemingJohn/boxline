import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import styles from "@/styles/editor/RowField.module.css";
import type { RowFieldProps } from "@/types/components/RowFieldProps";

export function RowField(props: RowFieldProps) {
  const { variant, value, placeholder, shouldFocus, onChange, onFocus } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (shouldFocus) inputRef.current?.focus({ preventScroll: true });
  }, [shouldFocus]);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus();
  };

  const handleClick = () => {
    const input = inputRef.current;
    if (!input || document.activeElement === input) return;
    input.focus({ preventScroll: true });
    input.setSelectionRange(input.value.length, input.value.length);
  };

  return (
    <div className={styles[variant]} onClick={handleClick}>
      <input
        ref={inputRef}
        className={isFocused ? `${styles.input} nodrag` : styles.input}
        type="text"
        value={value}
        placeholder={placeholder}
        aria-label={placeholder}
        autoComplete="off"
        spellCheck={false}
        onChange={(event) => onChange(event.target.value)}
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(event) => handleFieldKey(event, props)}
      />
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
