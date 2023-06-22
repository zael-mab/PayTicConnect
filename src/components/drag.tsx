import React from 'react';
import useDropZone from '../hooks/dropZone';
import DropZone from './DropZone';
import Navbar from './Navbar';
import Footer from './Footer';
import Btn from './Btn';

const DragAndDropComponent: React.FC = () => {
  const leftZone = useDropZone(1);
  const rightZone = useDropZone(2);

  return (
    <div className='bg-gray-100 flex flex-col justify-between min-h-screen'>
      <Navbar />     

      <div className='flex justify-between items-center md:items-start sm:flex-row flex-col my-4 mx-4 h-full'>
        <DropZone zone={leftZone} otherZone={rightZone}/>
        <DropZone zone={rightZone}  otherZone={leftZone}/>
      </div>
      {
        rightZone.savedItems.length > 0 && (

          
          <div className='my-4 mx-8 h-full'>

        <table className="w-full rounded-xl">
          <thead className=''>
            <tr className='w-full flex rounded-t-lg text-slate-100 bg-slate-700'>
              <th className='py-2 px-4 w-full border border-slate-400 rounded-tl-lg'>ID</th>
              <th className=' py-2 px-4 w-full border border-slate-400 rounded-tr-lg'>Field</th>
            </tr>
          </thead>
          <tbody className=''>
            {rightZone.savedItems.map((item, id) => (
              <tr key={id} className='w-full flex items-center rounded-lg'>
                <td className='py-2 px-4 w-full border border-slate-300 rounded-md'>
                  {id}
                </td>
                <td className='py-2 px-4 w-full border border-slate-300 rounded-md'>
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-start'>
          <Btn text={'Clear'} handleClick={rightZone.clearLastItemOnTable}/>

        </div>
      </div>
        )
      }

      <Footer />    
    </div>
  );
};

export default DragAndDropComponent;
