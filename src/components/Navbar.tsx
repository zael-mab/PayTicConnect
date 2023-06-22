import React from 'react';

const Navbar: React.FC = () => {
    return (
      <div className='py-2 bg-slate-300 flex items-center justify-between shadow-gray-900 shadow-md'>
        <a href='/' className='mx-8 py-2'>
          PayTicConnect
        </a>
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 border border-indigo-300 rounded-full dark:bg-gray-600 mr-8">
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        </div>
      </div>
    );
};

export default Navbar;