import styled from 'styled-components';
import { useDroppable } from '@dnd-kit/core';

const Droppable = ({ id }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return <Container ref={setNodeRef}>{isOver && <Line />}</Container>;
};

const Container = styled.div`
  position: absolute;
  left: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
`;

const Line = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 5px;
  height: 100%;
  background: black;
`;

export default Droppable;
