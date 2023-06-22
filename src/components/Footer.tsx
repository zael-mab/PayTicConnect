import React from 'react';

const Footer: React.FC = () => {
    const date = new Date().getFullYear();
    return (
      <div className='flex items-center justify-center py-4 bg-slate-300'>


            <p className='text-center text-gray-500 text-xs'>
              &copy;{date} PayTicConnect. All rights reserved.
            </p>

       </div>
    );
};

export default Footer;