import { useSyncExternalStore } from "react";
import { chooseTheme } from "@/lib/theme/chooseTheme";
import { getSavedTheme } from "@/lib/theme/getSavedTheme";
import { themeChangeEvent } from "@/lib/theme/themeChangeEvent";
import { themeChoices } from "@/lib/theme/themeChoices";
import type { ThemeChoice } from "@/types/theme/ThemeChoice";

const subscribeToTheme = (onChange: () => void) => {
  window.addEventListener(themeChangeEvent, onChange);
  return () => window.removeEventListener(themeChangeEvent, onChange);
};

export function useTheme() {
  const theme = useSyncExternalStore<ThemeChoice>(subscribeToTheme, getSavedTheme, () => "system");
  const currentIndex = themeChoices.findIndex((option) => option.choice === theme);

  const changeTheme = () => {
    chooseTheme(themeChoices[(currentIndex + 1) % themeChoices.length].choice);
  };

  return { current: themeChoices[currentIndex], changeTheme };
}
