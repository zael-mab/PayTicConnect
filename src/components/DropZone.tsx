import React from 'react';
import { DropZoneProps } from '../interfaces/dropZoneProps';
import ItemCard from './itemCard';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/itemTypes';

const DropZone: React.FC<DropZoneProps> = ({ zone, otherZone }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ITEM,
    drop: (item: any) => {
      console.log (item)
      // zone.addText(item.item)
      // zone.newItem(item.item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  console.log (isOver)


    return (
      <div className='rounded-lg my-2 mx-4 border border-gray-500 text-center bg-green-300 '>
        <h1 className='shadow-lg py-4'>Drop</h1>
        <div className='flex flex-col justify-end items-center'>
          <div className='flex items-center justify-center w-full h-full mt-4'>
            <input
              type='text'
              placeholder='Add Something'
              value={zone.text}
              className='text-center px-4 py-2 bg-slate-500 rounded-l-md'
              onChange={zone.addText}
            />
            <button
              className='px-8 py-2 my-2 bg-slate-300 rounded-r-md hover:bg-green-500 hover:text-yellow-50'
              onClick={zone.handleAddText}
            >
              Add
            </button>
          </div>

          {/* accept drop */}
          <ul
          ref={drop}
          className={`flex w-full flex-col justify-center items-center bg-opacity-40 bg-slate-500 p-2 ${isOver ? `bg-red-300` : ''}`}>
            {zone.items.length > 0 ? '' : <li>Add Item</li>}
            {zone.items.map((item, index) => (
              <ItemCard item={item} index={index} key={index} />
            ))}
          </ul>

          <div className='flex items-center justify-center w-full h-full mt-4'>
            <button
              className='px-8 py-2 my-2 bg-slate-300 hover:bg-red-100 hover:text-slate-800 w-full'
              onClick={zone.handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    );
};
  
export default DropZone;  
