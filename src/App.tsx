import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.scss';
import DragAndDropComponent from './components/drag';

const App: React.FC = () => {
  return (
    <div className=''>
      <DndProvider backend={HTML5Backend}>
        <DragAndDropComponent />
      </DndProvider>
    </div>
  );
};

export default App;
