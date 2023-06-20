import React from 'react';
import { DropZoneProps } from '../interfaces/dropZoneProps';
import ItemCard from './itemCard';

const DropZone: React.FC<DropZoneProps> = ({ zone }) => {
    return (
      <div className='rounded-lg w-3/4 h-full my-2 mx-4 border border-dotted border-gray-500 text-center bg-green-300 '>
        <h1 className='shadow-lg py-4'>Drop</h1>
        <div className='h-full w-full py-10 px-0'>
          <div className='flex flex-col justify-center items-center'>
            <input
              type='text'
              placeholder='Add Something'
              value={zone.text}
              className='text-center px-4 py-2 bg-slate-500 mb-2 rounded-md'
              onChange={zone.addText}
            />
            <div className='flex items-center justify-center w-full h-full mt-4'>
              <button
                className='px-8 py-2 my-2 bg-slate-300 rounded-md hover:bg-green-500 hover:text-yellow-50'
                onClick={zone.handleAddText}
              >
                Add
              </button>
            </div>
            <div className='flex w-full flex-col justify-center items-center bg-opacity-60 bg-slate-300'>
              {zone.items.map((item, index) => (
                <ItemCard item={item} key={index} />
              ))}
            </div>
            <div className='flex items-center justify-center w-full h-full mt-4'>
              <button
                className='px-8 py-2 my-2 bg-slate-300 rounded-md hover:bg-green-500 hover:text-yellow-50'
                onClick={zone.handleClear}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default DropZone;  