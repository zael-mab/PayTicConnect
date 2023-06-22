import React from 'react';

export interface DropZone {
  zoneIndex: number;
  items: string[];
  text: string;
  savedItems: string[];
  handleAddItem: () => void;
  addText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  newItem: (item: string) => void;
  removeItem: (index: number) => void;
  handleSave: () => void;
  updateItem: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DropZoneProps {
    zone: DropZone;
    otherZone: DropZone;
};
