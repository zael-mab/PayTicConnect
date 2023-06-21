
interface DropZone {
  items: string[];
  text: string;
  handleAddText: () => void;
  addText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  newItem: (item: string) => void;
}

export interface DropZoneProps {
    zone: DropZone;
    otherZone: DropZone;
};
