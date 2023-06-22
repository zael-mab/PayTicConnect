import React from 'react';
import { DropZoneProps } from '../interfaces/dropZoneProps';
import ItemCard from './itemCard';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../interfaces/itemTypes';

const DropZone: React.FC<DropZoneProps> = ({ zone, otherZone }) => {
  
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ITEM,
    drop: (item: any) => {
      if (item.dragedZone === zone.zoneIndex) return;
      zone.newItem(item.item);
      otherZone.removeItem(item.index);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

    return (
      <>
        <div className='rounded-lg my-2 mx-4 border border-gray-500 text-center bg-indigo-300 lg:w-1/3'>
          <h1 className='shadow-md py-4 text-gray-100 bg-gray-700 rounded-tr-lg rounded-tl-lg'>{zone.zoneIndex === 1 ? 'Left Zone' : 'Right Zone'}</h1>
          <div className='flex flex-col justify-end items-center mx-0'>
            <div className='flex items-center justify-center w-full h-full mt-4 mx-4'>
              <input
                type='text'
                placeholder='Add Something'
                value={zone.text}
                className='text-center px-4 py-2 bg-slate-500 rounded-l-md'
                onChange={zone.addText}
              />
              <button
                className='px-8 py-2 my-2 bg-slate-300 rounded-r-md hover:bg-green-300 hover:text-yellow-50 cursor-pointer'
                onClick={zone.handleAddItem}
              >
                Add
              </button>
            </div>

            {/* accept drop */}
            <ul
            ref={drop}
            className={`flex w-full flex-col justify-center items-center bg-opacity-40 bg-slate-500 p-2 px-4 md:px-12 xl:px-20 rounded-md ${isOver ? `bg-green-500 opacity-80` : ''}`}>
              {zone.items.length > 0 ? '' : <li>Add Item</li>}
              {zone.items.map((item, id) => (
                <ItemCard item={item}  dragedZone={zone.zoneIndex} zone={zone} index={id} key={id + item} />
              ))}
            </ul>

            <div className='flex items-center justify-center h-full mt-4'>
              <button
                className='px-8 py-2 my-2 bg-red-300 hover:bg-red-100 hover:text-slate-800 w-full cursor-pointer rounded-md transition-all duration-300 ease-in-out mx-2'
                onClick={zone.handleClear}
              >
                Clear
              </button>
              {
                zone.zoneIndex === 2 ? 
                <button
                className='px-8 py-2 my-2 bg-green-300 hover:bg-green-200 hover:text-slate-800 w-full cursor-pointer rounded-md transition-all duration-300 ease-in-out mx-2'
                onClick={zone.handleSave}
                >
                Save
              </button> : ''
              }
            </div>
          </div>
        </div>
      </>
    );
};
  
export default DropZone;  
