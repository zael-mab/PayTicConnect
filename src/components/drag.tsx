import React from 'react';
import useDropZone from '../hooks/dropZone';
import DropZone from './DropZone';

const DragAndDropComponent: React.FC = () => {
  const firstZone = useDropZone(1);
  const secondZone = useDropZone(2);

  return (
    <div className='bg-gray-100 flex flex-col justify-start min-h-screen'>
      <div className='py-2 text-black bg-slate-300 flex items-center justify-center shadow-gray-900 shadow-md'>
        <a href='/' className='px-4 py-2'>
          PayTicConnect
        </a>
      </div>

      <div className='flex justify-around items-start sm:flex-row flex-col my-4 mx-2 h-full'>
        <DropZone zone={firstZone} otherZone={secondZone}/>
        <DropZone zone={secondZone}  otherZone={firstZone}/>
      </div>
    </div>
  );
};

export default DragAndDropComponent;
