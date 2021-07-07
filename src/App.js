import './App.css';
import Basic from './Basic';
import DraggableItems from './DraggableItems';
import AdvanceDraggableItems from './AdvancedDraggableItems';

function App() {
  return (
    <div>
      <h2>Basic</h2>
      <Basic />
      <h2>Draggable Items</h2>
      <DraggableItems />
      <h2>Advanced Draggable Items</h2>
      <AdvanceDraggableItems />
    </div>
  );
}
export default App;
