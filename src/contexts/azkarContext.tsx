/* eslint-disable react-refresh/only-export-components */
import React, { useState, createContext, ReactNode, useContext } from "react";
import azkarApi from "../jsons/azkar.json";

interface ZekrDataItem {
  text: string;
  disc: string;
}

interface Zekr {
  id: number;
  name: string;
  icon: string;
  data: ZekrDataItem[];
}

interface AzkarContextProps {
  zekrNum: number;
  zekr: Zekr | null;
  zekrItem: ZekrDataItem | null;
  zekrClickHandler: (id: number) => void;
  arrowHandler: (dir: string) => void;
}

const azkarContext = createContext<AzkarContextProps | undefined>(undefined);

interface AzkarStateProps {
  children: ReactNode;
}

const AzkarState: React.FC<AzkarStateProps> = (props) => {
  const [zekr, setZekr] = useState<Zekr | null>(null);
  const [zekrItem, setZekrItem] = useState<ZekrDataItem | null>(null);
  const [zekrNum, seZekrNum] = useState<number>(0);

  const zekrClickHandler = (id: number) => {
    const data = azkarApi.find((ele: Zekr) => ele.id === id) || null;
    setZekr(data);
    seZekrNum(0);
    setZekrItem(data ? data.data[0] : null);
  };

  const arrowHandler = (dir: string = "") => {
    if (zekr) {
      const newIndex = dir === "next" ? zekrNum + 1 : zekrNum - 1;
      if (newIndex >= 0 && newIndex < zekr.data.length) {
        setZekrItem(zekr.data[newIndex]);
        seZekrNum(newIndex);
      }
    }
  };

  return (
    <azkarContext.Provider
      value={{ zekrNum, zekr, zekrItem, zekrClickHandler, arrowHandler }}
    >
      {props.children}
    </azkarContext.Provider>
  );
};

export { azkarContext, AzkarState };

const useAzkarContext = () => {
  const context = useContext(azkarContext);
  if (!context) {
    throw new Error("useAzkarContext must be used within an AzkarState");
  }
  return context;
};

export default useAzkarContext;