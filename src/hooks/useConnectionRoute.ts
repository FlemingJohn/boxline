import { useContext } from "react";
import { ConnectionRoutesContext } from "@/lib/diagram/ConnectionRoutesContext";

export function useConnectionRoute(connectionId: string) {
  return useContext(ConnectionRoutesContext).get(connectionId);
}
