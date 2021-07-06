import styled from 'styled-components';
import { useDroppable } from '@dnd-kit/core';

const Droppable = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <Container
      ref={setNodeRef}
      style={{
        border: isOver ? '5px solid black' : undefined,
        background: id,
      }}
    >
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
`;

export default Droppable;
