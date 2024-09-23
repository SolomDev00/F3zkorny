import React, { useState, createContext, ReactNode } from "react";
import azkarApi from "../jsons/hadeeth.json";

import { HadethCategory, HadethDataEntry, HadethContextProps } from "../interfaces";

const HadethContext = createContext<HadethContextProps | undefined>(undefined);

interface HadethStateProps {
  children: ReactNode;
}

const HadethState: React.FC<HadethStateProps> = ({ children }) => {
  const [hadethCategories] = useState<HadethCategory[]>(azkarApi);

  const [currentCategory, setCurrentCategory] = useState<HadethCategory | null>(null);
  const [currentHadethItem, setCurrentHadethItem] = useState<HadethDataEntry | null>(null);
  const [currentHadethIndex, setCurrentHadethIndex] = useState<number>(0);

  const selectCategory = (id: number) => {
    const category = hadethCategories.find((cat) => cat.id === id) || null;
    setCurrentCategory(category);
    setCurrentHadethIndex(0);
    setCurrentHadethItem(category ? category.data[0] : null);
  };

  const navigateHadeth = (direction: 'next' | 'prev') => {
    if (!currentCategory) return;

    let newIndex = currentHadethIndex;

    if (direction === 'next') {
      newIndex = currentHadethIndex + 1;
      if (newIndex >= currentCategory.data.length) {
        newIndex = 0;
      }
    } else if (direction === 'prev') {
      newIndex = currentHadethIndex - 1;
      if (newIndex < 0) {
        newIndex = currentCategory.data.length - 1;
      }
    }

    setCurrentHadethIndex(newIndex);
    setCurrentHadethItem(currentCategory.data[newIndex]);
  };

  return (
    <HadethContext.Provider
      value={{
        hadethCategories,
        currentCategory,
        currentHadethItem,
        currentHadethIndex,
        selectCategory,
        navigateHadeth,
      }}
    >
      {children}
    </HadethContext.Provider>
  );
};

export { HadethContext, HadethState };
