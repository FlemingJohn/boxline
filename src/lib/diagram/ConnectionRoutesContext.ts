import { createContext } from "react";
import type { ConnectionRoute } from "@/types/diagram/ConnectionRoute";

export const ConnectionRoutesContext = createContext<Map<string, ConnectionRoute>>(new Map());
