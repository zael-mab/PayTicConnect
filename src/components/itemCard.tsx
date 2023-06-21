import React from 'react';
import { useDrag} from 'react-dnd';
import { ItemTypes } from '../interfaces/itemTypes';

const ItemCard: React.FC<{ 
  item: string, 
  index: number, 
  dragedZone:number 
}> = ({ item, index, dragedZone }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM,
    item: { item, index, dragedZone },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (<>
    <li
    className={`flex items-center justify-center w-full h-full my-2 ${isDragging ? 'opacity-10' : ''}`}
    ref={drag}>
      <div className='bg-slate-500 border border-gray-200 w-full py-2 shadow-md'>
        {item}
      </div>
    </li>
  </>
  );
};

export default ItemCard;
  