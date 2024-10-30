import { useDrag } from "react-dnd";
import { ItemTypes } from "@/configs/drag-items";
import Card from "@/components/Card";

const DraggableCard = props => {
  const [{}, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { type: ItemTypes.CARD, ...props },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )
  
  // const [{ opacity }, dragRef] = useDrag({
  //   item: { type: ItemTypes.CARD, ...props }
  // });


  return (
    <div ref={dragRef}>
      <Card task={props.task} />
    </div>
  );
};

export default DraggableCard;
