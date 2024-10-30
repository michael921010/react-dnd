import { useEffect } from 'react'
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { ItemTypes } from "@/configs/drag-items";
import Card from "@/components/Card";

const DraggableCard = props => {
  const [{}, dragRef, preview] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { type: ItemTypes.CARD, ...props },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )
  
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);


  return (
    <div ref={dragRef}>
      <Card task={props.task} />
    </div>
  );
};

export default DraggableCard;
