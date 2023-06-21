import React from 'react';
import { useDrag} from 'react-dnd';
import { ItemTypes } from '../utils/itemTypes';

const ItemCard: React.FC<{ item: string, index: number }> = ({ item, index }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM,
    item: { item, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (<>
    <li
    className={`flex items-center justify-center w-full h-full my-2 ${isDragging ? 'opacity-50' : ''}`}
    ref={drag}>
      <div className='bg-slate-500 border border-gray-200 w-full py-2 shadow-md'>
        {item}
      </div>
    </li>
  </>
  );
};

export default ItemCard;
  