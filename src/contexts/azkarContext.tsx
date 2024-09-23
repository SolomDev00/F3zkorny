import { createContext, useContext } from 'react';

interface ZekrItem {
  text: string;
  disc: string;
}

interface AzkarData {
  id: number;
  name: string;
  icon: string;
  data: ZekrItem[];
}

interface AzkarContextProps {
  zekr: AzkarData | null;
  zekrItem: ZekrItem | null;
  arrowHandler: (direction: 'prev' | 'next') => void;
  zekrNum: number;
  zekrClickHandler: (id: number) => void;
}

const azkarContext = createContext<AzkarContextProps | undefined>(undefined);

export const useAzkarContext = () => {
  const context = useContext(azkarContext);
  if (!context) {
    throw new Error("useAzkarContext must be used within an AzkarProvider");
  }
  return context;
};

export default azkarContext;
