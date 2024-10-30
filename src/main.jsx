import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TaskBoard from "@/pages/TaskBoard";

const tasks = [
  {
    title: "Todo",
    tasks: ["Read chapters for next class"],
  },
  {
    title: "Doing",
    tasks: ["Complete in-class activity", "Brainsotrm project ideas"],
  },
  {
    title: "Done",
    tasks: [],
  },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskBoard tasks={tasks} />
  </StrictMode>,
);
