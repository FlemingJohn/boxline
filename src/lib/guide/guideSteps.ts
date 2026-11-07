import { FilePlus2, History, Move, Pencil, RefreshCw, Spline, SquarePlus } from "lucide-react";
import type { GuideStep } from "@/types/guide/GuideStep";

export const guideSteps: GuideStep[] = [
  {
    id: "start-a-diagram",
    title: "Start a diagram",
    text: "Pick class or ER, then choose whether to save it. Each new diagram asks once.",
    icon: FilePlus2,
  },
  {
    id: "add-and-type",
    title: "Add and type",
    text: "Click an empty spot to add a box. Press Enter for each row, and on an empty row to finish.",
    icon: SquarePlus,
  },
  {
    id: "move-and-edit",
    title: "Move and edit",
    text: "Drag a box to move it. Click any text once to change it.",
    icon: Move,
  },
  {
    id: "connect-boxes",
    title: "Connect boxes",
    text: "Drag from a box's edge to another box, or to an empty spot to make a new box.",
    icon: Spline,
  },
  {
    id: "auto-sync",
    title: "Auto-sync to your file",
    text: "After you save, every change syncs to your file about a second after you stop.",
    icon: RefreshCw,
  },
  {
    id: "come-back",
    title: "Come back later",
    text: "Press Continue on the landing page, and your diagram opens as you left it.",
    icon: History,
  },
  {
    id: "rename",
    title: "Rename a diagram",
    text: "Click the name in the top bar and type a new one. A save window asks you to confirm it.",
    icon: Pencil,
  },
];
