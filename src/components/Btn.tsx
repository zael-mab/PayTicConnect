import React from 'react';

const Btn = ({handleClick, text}: {handleClick: () => void, text: string}) => {
    return (
        <button
            className='px-8 py-2 my-2 bg-red-300 hover:bg-red-100 hover:text-slate-800cursor-pointer rounded-md transition-all duration-300 ease-in-out'
            onClick={handleClick}
          >
            {text}
          </button>
    );

};

export default Btn;