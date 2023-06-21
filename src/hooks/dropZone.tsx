import { useState, useEffect } from 'react';


const useDropZone = (zoneIndex: number) => {
  // const [items, setItems] = useState<string[]>([]);
  const storageKey = zoneIndex === 1 ? 'dropZoneOneItems' : 'dropZoneTwoItems';
  const [items, setItems] = useState<string[]>(() => {
    const storedItems = localStorage.getItem(storageKey);
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const storageKey = zoneIndex === 1 ? 'dropZoneOneItems' : 'dropZoneTwoItems';
    const storedItems = localStorage.getItem(storageKey);
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, [zoneIndex]);

  useEffect(() => {
    const storageKey = zoneIndex === 1 ? 'dropZoneOneItems' : 'dropZoneTwoItems';
    localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items, zoneIndex]);

  const handleAddText = () => {
    if (text.length === 0) return;
    setItems(prevItems => [...prevItems, text]);
    setText('');
  };

  const removeItem = (index: number) => {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  // Drop
  const newItem = (item: string) => setItems(prevItems => [...prevItems, item]);

  const addText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleClear = () => {
    if (items.length === 0) return;
    setItems(prevItems => prevItems.slice(0, prevItems.length - 1));
  };

  return {
    zoneIndex,
    items,
    text,
    handleAddText,
    addText,
    handleClear,
    newItem,
    removeItem
  };
};


export default useDropZone;