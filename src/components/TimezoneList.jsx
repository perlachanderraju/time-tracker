import React from 'react';
import TimezoneItem from './TimezoneItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function TimezoneList({ timezones, setTimezones }) {
  const handleRemove = (timezone) => {
    setTimezones(timezones.filter(tz => tz !== timezone));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(timezones);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTimezones(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="timezones">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {timezones.map((timezone, index) => (
              <Draggable key={timezone} draggableId={timezone} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TimezoneItem
                      timezone={timezone}
                      onRemove={handleRemove}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TimezoneList;
