
export interface DropZoneProps {
    zone: {
      items: string[];
      text: string;
      handleAddText: () => void;
      addText: (e: React.ChangeEvent<HTMLInputElement>) => void;
      handleClear: () => void;
    };
};