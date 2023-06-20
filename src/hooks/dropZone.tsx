import { useState } from 'react';

const useDropZone = () => {
    const [items, setItems] = useState<string[]>([]);
    const [text, setText] = useState<string>('');
  
    const handleAddText = () => {
      if (text.length === 0) return;
      setItems((prevItems) => [...prevItems, text]);
      setText('');
    };
  
    const addText = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    };
  
    const handleClear = () => {
      setItems((prevItems) => prevItems.slice(0, prevItems.length - 1));
    };
  
    return {
      items,
      text,
      handleAddText,
      addText,
      handleClear,
    };
  };
  

  export default useDropZone;