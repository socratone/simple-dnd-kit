import styled from 'styled-components';
import { useDroppable } from '@dnd-kit/core';

const Droppable = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <Container ref={setNodeRef}>
      {children}
      {isOver && <Line />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
`;

const Line = styled.div`
  width: 5px;
  height: 100%;
  background: black;
  position: absolute;
  left: -3px;
`;

export default Droppable;
