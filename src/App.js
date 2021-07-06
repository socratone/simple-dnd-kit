import './App.css';
import { DndContext } from '@dnd-kit/core';
import Draggable from './Draggable';
import Droppable from './Droppable';
import { useState } from 'react';

function App() {
  const containers = ['dodgerblue', 'gold', 'deeppink'];
  const [parent, setParent] = useState('dodgerblue');

  return (
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
  );

  function handleDragEnd(event) {
    const { over } = event;
    const currentParent = parent;
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : currentParent);
  }
}
export default App;
