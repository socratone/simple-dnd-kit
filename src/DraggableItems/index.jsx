import styled from 'styled-components';
import { DndContext } from '@dnd-kit/core';
import Draggable from './Draggable';
import Droppable from './Droppable';
import { useState } from 'react';

const DraggableItems = () => {
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

    const getOverIndex = () => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === over.id) {
          return i;
        }
      }
    };

    const movedItem = items.find((item) => active.id === item.id);
    const newItems = items.slice();

    // 배열에 먼저 추가한다.
    const overIndex = getOverIndex();
    newItems.splice(overIndex, 0, movedItem);

    // 원본을 지운다.
    let originalIndex;
    for (let i = 0; i < newItems.length; i++) {
      // 새로 추가한 곳은 지나친다.
      if (i === overIndex) continue;
      if (newItems[i].id === movedItem.id) {
        originalIndex = i;
        break;
      }
    }
    newItems.splice(originalIndex, 1);

    setItems(newItems);
  };

  return (
    <Container>
      <DndContext onDragEnd={handleDragEnd}>
        {items.map((item) => (
          <Droppable key={item.id} id={item.id}>
            <Draggable id={item.id} color={item.color}>
              드래그
            </Draggable>
          </Droppable>
        ))}
      </DndContext>
    </Container>
  );
};

const Container = styled.div`
  display: inline-flex;
  border: 1px solid grey;

  & > * {
    border-right: 1px solid grey;
  }

  & > *:last-child {
    border-right: 0;
  }
`;

export default DraggableItems;
