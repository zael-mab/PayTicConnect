import { useState, useEffect } from 'react';


const useDropZone = (zoneIndex: number) => {
  // const [items, setItems] = useState<string[]>([]);
  const storageKey = zoneIndex === 1 ? 'dropZoneOneItems' : 'dropZoneTwoItems';
  const [items, setItems] = useState<string[]>(() => {
    const storedItems = localStorage.getItem(storageKey);
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [savedItems, setSavedItems] = useState<string[]>(() => {
    const storedItems = localStorage.getItem('SavedItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const storedItems = localStorage.getItem(storageKey);
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, [zoneIndex, storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items, zoneIndex, storageKey]);

  useEffect(() => {
    localStorage.setItem('SavedItems', JSON.stringify(savedItems));
  }, [savedItems]);

  const handleAddItem = () => {
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

  const handleSave = () => {
    if (items.length === 0) return;
    setSavedItems(prevItems => [...prevItems, ...items]);
    setItems([]);
  };

  const updateItem = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.length === 0) return;
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index] = e.target.value;
      return updatedItems;
    });
  };

  return {
    zoneIndex,
    items,
    text,
    savedItems,
    handleAddItem,
    handleSave,
    addText,
    handleClear,
    newItem,
    removeItem,
    updateItem,
  };
};


export default useDropZone;