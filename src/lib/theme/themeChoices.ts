import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import type { ThemeChoice } from "@/types/theme/ThemeChoice";

export const themeChoices: { choice: ThemeChoice; label: string; icon: LucideIcon }[] = [
  { choice: "system", label: "System", icon: Monitor },
  { choice: "light", label: "Light", icon: Sun },
  { choice: "dark", label: "Dark", icon: Moon },
];
