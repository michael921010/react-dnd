import { useDragLayer } from "react-dnd";
import { ItemTypes } from "@/configs/drag-items";
import Card from "@/components/Card";

const layerStyles = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0
};

function getItemStyles(initialOffset, currentOffset) {

  if (!initialOffset || !currentOffset) {
    return {
      display: "none"
    };
  }

  const { x, y } = currentOffset;

//   const transform = `translate(${x}px, ${y}px)`
  const transform = `translate(${x}px, ${y}px) rotate(${ currentOffset.x > initialOffset.x? "": "-"}5deg)`;
  return {
    transform,
    WebkitTransform: transform
  };
}

const DragLayer = () => {
  const {
    itemType,
    isDragging,
    item,
    initialOffset,
    currentOffset
  } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }));


  function renderItem() {
    switch (itemType) {
      case ItemTypes.CARD:
        return <Card task={item.task} />;
      default:
        return null;
    }
  }

  if (!isDragging) {
    return null;
  }
  
  return (
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {renderItem()}
      </div>
    </div>
  );
};
export default DragLayer;