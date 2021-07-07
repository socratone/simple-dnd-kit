import styled from 'styled-components';
import { DndContext } from '@dnd-kit/core';
import Draggable from './Draggable';
import Droppable from './Droppable';
import { useState } from 'react';
import Box from './Box';

const AdvancedDraggableItems = () => {
  const [items, setItems] = useState([
    {
      id: '1',
      color: 'dodgerblue',
    },
    {
      id: '2',
      color: 'gold',
    },
    {
      id: '3',
      color: 'deeppink',
    },
    {
      id: '4',
      color: 'green',
    },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const movedItem = items.find((item) => active.id === item.id);
    const newItems = items.slice();

    if (over.id === 'last-child') {
      const decreased = newItems.filter((item) => item.id !== movedItem.id);
      decreased.push(movedItem);
      setItems(decreased);
    } else {
      // 일반적인 경우

      // 배열에 먼저 추가한다.
      const overIndex = items.findIndex((item) => item.id === over.id);
      newItems.splice(overIndex, 0, movedItem);

      // 원본을 지운다.
      const originalIndex = newItems.findIndex((item, index) => {
        if (index === overIndex) return false;
        if (item.id === movedItem.id) return true;
        return false;
      });
      newItems.splice(originalIndex, 1);

      setItems(newItems);
    }
  };

  return (
    <Container>
      <DndContext onDragEnd={handleDragEnd}>
        {items.map((item) => (
          <Box key={item.id}>
            <Droppable id={item.id} />
            <Draggable id={item.id} color={item.color}>
              드래그
            </Draggable>
          </Box>
        ))}
        <Box invisible>
          <Droppable id="last-child" />
        </Box>
      </DndContext>
    </Container>
  );
};

const Container = styled.div`
  display: inline-flex;
  border: 1px solid grey;

  & > * {
    border-left: 1px solid grey;
  }

  & > *:first-child {
    border-left: 0;
  }
`;

export default AdvancedDraggableItems;
