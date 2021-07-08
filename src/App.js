import './App.css';
import Basic from './Basic';
import DraggableItems from './DraggableItems';
import AdvanceDraggableItems from './AdvancedDraggableItems';
import SortableItems from './SortableItems';

function App() {
  return (
    <div>
      <h2>Basic</h2>
      <Basic />
      <h2>Draggable Items</h2>
      <DraggableItems />
      <h2>Advanced Draggable Items</h2>
      <AdvanceDraggableItems />
      <h2>Sortable Preset</h2>
      <SortableItems />
    </div>
  );
}
export default App;
