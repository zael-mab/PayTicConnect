import React from 'react';

const ItemCard: React.FC<{ item: string }> = ({ item }) => {
    return (
      <div className='flex items-center justify-center w-full h-full mt-4'>
        <div className='px-8 py-2 bg-slate-500 rounded-md w-full mx-2 shadow-md'>{item}</div>
      </div>
    );
};

export default ItemCard;
  