import React from 'react';
import useDropZone from '../hooks/dropZone';
import DropZone from './DropZone';

const DragAndDropComponent: React.FC = () => {
  const firstZone = useDropZone();
  const secondZone = useDropZone();

  return (
    <div className='bg-gray-500 flex flex-col justify-start min-h-screen'>
      <div className='py-2 text-fuchsia-50 bg-slate-400 flex items-center justify-center shadow-gray-900 shadow-md'>
        <a href='/' className='px-4 py-2'>
          PayTicConnect
        </a>
      </div>

      <div className='flex justify-between items-center sm:flex-row flex-col my-4 mx-2 h-full'>
        <DropZone zone={firstZone} />
        <DropZone zone={secondZone} />
      </div>
    </div>
  );
};

export default DragAndDropComponent;
