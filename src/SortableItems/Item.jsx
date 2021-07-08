import React from 'react';
import styled from 'styled-components';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Item = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Container ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </Container>
  );
};

const Container = styled.span`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: dodgerblue;
  color: white;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export default Item;
