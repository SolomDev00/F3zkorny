import React, { useState, createContext, ReactNode } from "react";
import azkarApi from "../jsons/hadiths.json";
import { HadithsCategory, HadithsDataEntry, HadithsContextProps } from "../interfaces";

const HadithsContext = createContext<HadithsContextProps | undefined>(undefined);

interface HadithsStateProps {
  children: ReactNode;
}

const HadithsState: React.FC<HadithsStateProps> = ({ children }) => {
  const [HadithsCategories] = useState<HadithsCategory[]>(azkarApi);
  const [currentCategory, setCurrentCategory] = useState<HadithsCategory | null>(null);
  const [currentHadithsItem, setCurrentHadithsItem] = useState<HadithsDataEntry | null>(null);
  const [currentHadithsIndex, setCurrentHadithsIndex] = useState<number>(0);

  const selectCategory = (id: number) => {
    const category = HadithsCategories.find((cat) => cat.id === id) || null;
    setCurrentCategory(category);
    setCurrentHadithsIndex(0);
    setCurrentHadithsItem(category ? category.data[0] : null);
  };

  const navigateHadiths = (direction: "next" | "prev") => {
    if (!currentCategory) return;

    let newIndex = currentHadithsIndex;

    if (direction === "next") {
      newIndex = currentHadithsIndex + 1;
      if (newIndex >= currentCategory.data.length) {
        newIndex = 0;
      }
    } else if (direction === "prev") {
      newIndex = currentHadithsIndex - 1;
      if (newIndex < 0) {
        newIndex = currentCategory.data.length - 1;
      }
    }

    setCurrentHadithsIndex(newIndex);
    setCurrentHadithsItem(currentCategory.data[newIndex]);
  };

  return (
    <HadithsContext.Provider
      value={{
        HadithsCategories,
        currentCategory,
        currentHadithsItem,
        currentHadithsIndex,
        selectCategory,
        navigateHadiths,
      }}
    >
      {children}
    </HadithsContext.Provider>
  );
};

export { HadithsContext, HadithsState };
