
interface DropZone {
  zoneIndex: number;
  items: string[];
  text: string;
  handleAddText: () => void;
  addText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  newItem: (item: string) => void;
  removeItem: (index: number) => void;
}

export interface DropZoneProps {
    zone: DropZone;
    otherZone: DropZone;
};
