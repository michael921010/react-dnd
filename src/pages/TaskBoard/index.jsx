import { useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./TaskBoard.scss";
import Column from "@/components/Column";
import DragLayer from "@/components/DragLayer";

const TaskBoard = ({ tasks }) => {
  const [myTasks, moveMyTask] = useState(tasks);

  const handleMoveMyTask = useCallback(
    (from, to) => {
      console.log("from: ", from);
      console.log("to: ", to);

      const { task, columnIndex: fromColumnIndex, index } = from;
      const { columnIndex: toColumnIndex } = to;

      const newMyTasks = [...myTasks];
      // remove task
      newMyTasks[fromColumnIndex].tasks.splice(index, 1);
      // move task
      newMyTasks[toColumnIndex].tasks.push(task);

      console.log(newMyTasks);
      moveMyTask(newMyTasks);
    },
    [myTasks],
  );

  const columns = myTasks.map((tasks, columnIndex) => {
    const propsToColumn = { tasks, columnIndex };
    return (
      <Column
        key={`column ${columnIndex}`}
        {...propsToColumn}
        onMoveMyTask={handleMoveMyTask}
      />
    );
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <DragLayer />
      <div className="task-board">{columns}</div>
    </DndProvider>
  );
};

export default TaskBoard;
