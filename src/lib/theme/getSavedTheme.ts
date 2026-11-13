import { themeStorageKey } from "@/lib/theme/themeStorageKey";
import type { ThemeChoice } from "@/types/theme/ThemeChoice";

export function getSavedTheme(): ThemeChoice {
  try {
    const savedTheme = localStorage.getItem(themeStorageKey);
    return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "system";
  } catch {
    return "system";
  }
}
