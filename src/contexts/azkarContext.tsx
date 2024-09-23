/* eslint-disable react-refresh/only-export-components */
import React, { useState, createContext, ReactNode } from "react";
import azkarApi from "../jsons/azkar.json";

// تعريف نوع ZekrDataItem بما في ذلك الحقل الجديد disc
interface ZekrDataItem {
  text: string;
  disc: string;
  // يمكنك إضافة الحقول الأخرى حسب البيانات الموجودة في azkar.json
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
  // States
  const [zekr, setZekr] = useState<Zekr | null>(null);
  const [zekrItem, setZekrItem] = useState<ZekrDataItem | null>(null);
  const [zekrNum, seZekrNum] = useState<number>(0);

  // Functions
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
