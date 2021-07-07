import styled from 'styled-components';
import { useDraggable } from '@dnd-kit/core';

const Draggable = ({ id, color, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: transform ? 100 : 1, // active된 draggable z-index를 최상으로 변경
      }
    : undefined;

  return (
    <Container
      ref={setNodeRef}
      color={color}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: 1;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 12px;
`;

export default Draggable;
