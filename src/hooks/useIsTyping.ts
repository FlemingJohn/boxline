import { useState, type FocusEvent } from "react";

export function useIsTyping() {
  const [isTyping, setIsTyping] = useState(false);

  const handleFocus = (event: FocusEvent<HTMLElement>) => {
    setIsTyping(event.target instanceof HTMLInputElement);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  return { isTyping, handleFocus, handleBlur };
}
