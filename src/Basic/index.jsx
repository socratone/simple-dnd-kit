import styled from 'styled-components';
import { DndContext } from '@dnd-kit/core';
import Draggable from './Draggable';
import Droppable from './Droppable';
import { useState } from 'react';

const Basic = () => {
  const containers = ['dodgerblue', 'gold', 'deeppink'];
  const [parent, setParent] = useState('dodgerblue');

  return (
    <Container>
      <DndContext onDragEnd={handleDragEnd}>
        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Droppable key={id} id={id}>
            {parent === id ? (
              <Draggable id="draggable">드래그</Draggable>
            ) : (
              '빈 공간'
            )}
          </Droppable>
        ))}
      </DndContext>
    </Container>
  );

  function handleDragEnd(event) {
    const { over } = event;
    const currentParent = parent;
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : currentParent);
  }
};

const Container = styled.div`
  display: flex;
`;

export default Basic;
