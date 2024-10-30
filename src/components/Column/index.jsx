import "./Column.scss";
import { useDrop } from "react-dnd";
import { ItemTypes } from "@/configs/drag-items";
import DraggableCard from "@/components/DraggableCard";
import Card from "@/components/Card";

const Column = ({ tasks: { title, tasks }, columnIndex, onMoveMyTask }) => {
  const [{ isOver, canDrop }, dropRef] = useDrop(() => ({
    accept: ItemTypes.CARD,
      drop: item => {
      const from = item;
      const to = { columnIndex };
      onMoveMyTask(from, to);
    },
    canDrop: item => item.columnIndex !== columnIndex,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

  
  const cards = tasks.map((task, index) => {
    const propsToDraggbleCard = { task, columnIndex, index };
    return (
      <DraggableCard
        key={`${columnIndex} ${index} ${task}`}
        {...propsToDraggbleCard}
      />
    );
  });

  

  return (
    <div ref={dropRef} className="column">
      <p className="column__title">{title}</p>
      
      <div className="column__cards">
        {cards}
        {isOver && canDrop ? <Card empty /> : ""}
      </div>

      <div className="column__add-task-input">
        <textarea type="text" placeholder="Type task here ..." />
        <button className="column__add-task-btn">Add Task</button>
      </div>
    </div>
  );
};

export default Column;
