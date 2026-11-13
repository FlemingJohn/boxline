import { themeStorageKey } from "@/lib/theme/themeStorageKey";

export const themeStartScript = `try{var savedTheme=localStorage.getItem("${themeStorageKey}");if(savedTheme==="light"||savedTheme==="dark"){document.documentElement.setAttribute("data-theme",savedTheme)}}catch(error){}`;
