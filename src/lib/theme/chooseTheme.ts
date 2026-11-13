import { themeChangeEvent } from "@/lib/theme/themeChangeEvent";
import { themeStorageKey } from "@/lib/theme/themeStorageKey";
import type { ThemeChoice } from "@/types/theme/ThemeChoice";

export function chooseTheme(choice: ThemeChoice): void {
  try {
    if (choice === "system") localStorage.removeItem(themeStorageKey);
    else localStorage.setItem(themeStorageKey, choice);
  } catch {
    return;
  } finally {
    if (choice === "system") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", choice);
    window.dispatchEvent(new Event(themeChangeEvent));
  }
}
