import { useEffect, useRef, useState } from "react";

export function useRowFieldFocus(shouldFocus: boolean, onFocus: () => void) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (shouldFocus) inputRef.current?.focus({ preventScroll: true });
  }, [shouldFocus]);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus();
  };

  const handleBlur = () => setIsFocused(false);

  const handleClick = () => {
    const input = inputRef.current;
    if (!input || document.activeElement === input) return;
    input.focus({ preventScroll: true });
    input.setSelectionRange(input.value.length, input.value.length);
  };

  return { inputRef, isFocused, handleFocus, handleBlur, handleClick };
}
