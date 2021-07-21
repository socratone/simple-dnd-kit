import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import styled from 'styled-components';
import SortableItem from './SortableItem';

const SortableItems = () => {
  const [items, setItems] = useState(['1', '2', '3', '4']);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <Flex>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        {/* items prop에는 id: string 배열이 들어가야 한다. */}
        <SortableContext items={items} strategy={horizontalListSortingStrategy}>
          {items.map((id) => (
            <SortableItem key={id} id={id}>
              {id}
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>
    </Flex>
  );
};

const Flex = styled.section`
  display: flex;
  gap: 10px;
`;

export default SortableItems;
