import styled from 'styled-components';
import { useDraggable } from '@dnd-kit/core';

const Draggable = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <Container ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: green;
  width: 80px;
  height: 80px;
  border-radius: 12px;
`;

export default Draggable;
