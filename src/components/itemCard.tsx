import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../interfaces/itemTypes';
import { DropZone } from '../interfaces/dropZoneProps';

const ItemCard: React.FC<{ 
  item: string, 
  index: number, 
  dragedZone:number,
  zone: DropZone
}> = ({ item, index, dragedZone, zone }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM,
    item: { item, index, dragedZone },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (<>
    <li
    className={`flex items-center justify-center mx-5 w-full h-full my-2 ${isDragging ? 'opacity-10' : ''} cursor-pointer`}
    ref={drag}>
      <div className='bg-slate-300 border border-gray-200 w-full py-2 shadow-md'>
        {/* Need Change */}
        {/* <input
        type='text'
        className='text-center px-4 py-2 bg-slate-500 rounded-sm'
        onChange={(e) => zone.updateItem(index, e)}
        value={item} /> */}
        {item}
      </div>
    </li>
  </>
  );
};

export default ItemCard;
  