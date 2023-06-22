import React from 'react';
import useDropZone from '../hooks/dropZone';
import DropZone from './DropZone';
import Navbar from './Navbar';
import Footer from './Footer';


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

      <div className='flex my-4 mx-8 h-full'>

        <table className="w-full border border-gray-500">
          <thead>
            <tr className='w-full flex'>
              <th className='border border-gray-500 py-2 px-4 w-full'>ID</th>
              <th className='border border-gray-500 py-2 px-4 w-full'>Field</th>
            </tr>
          </thead>
          <tbody className=''>
            {rightZone.savedItems.map((item, id) => (
              <tr key={id} className='w-full flex items-center'>
                <td className='border border-gray-500 py-2 px-4 w-full'>
                  {id}
                </td>
                <td className='border border-gray-500 py-2 px-4 w-full'>
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />    
    </div>
  );
};

export default DragAndDropComponent;
