/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState, ReactNode } from "react";

interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
}

interface Surah {
  name_ar: string;
  name_en: string;
  ayahs: Ayah[];
}

interface SurahReference {
  number: number;
  name: string;
  revelationType: string;
  numberOfAyahs: number;
}

interface SurahContextType {
  dataLoaded: boolean;
  surahs: SurahReference[];
  surah: Surah | null;
  surahNumber: number;
  surahLoaded: boolean;
  surahClickHandler: (num: number) => void;
  arrowHandler: (dir: string) => void;
  searchHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface SurahStateProps {
  children: ReactNode;
}

const surahContext = createContext<SurahContextType | undefined>(undefined);

const SurahState: React.FC<SurahStateProps> = (props) => {
  const [dataLoaded, setDataLoad] = useState<boolean>(false);
  const [surahs, setSurahs] = useState<SurahReference[]>([]);
  const [surah, setSurah] = useState<Surah | null>(null);
  const [surahNumber, setSurahNumber] = useState<number>(NaN);
  const [surahLoaded, setSurahLoad] = useState<boolean>(false);

  // Functions
  const surahClickHandler = (num: number) => {
    setSurahLoad(false);
    setSurahNumber(num);
    fetch(`http://api.alquran.cloud/v1/surah/${num}`).then((res) => {
      res.json().then((result) => {
        const data = result.data;
        const newSurah: Surah = {
          name_ar: data.name,
          name_en: data.englishName,
          ayahs: data.ayahs,
        };
        setSurah(newSurah);
        setSurahLoad(true);
      });
    });
  };

  const arrowHandler = (dir: string) => {
    setSurahLoad(false);
    fetch(
      `http://api.alquran.cloud/v1/surah/${dir === "next" ? surahNumber + 1 : surahNumber - 1
      }`
    ).then((res) => {
      res.json().then((result) => {
        const data = result.data;
        const newSurah: Surah = {
          name_ar: data.name,
          name_en: data.englishName,
          ayahs: data.ayahs,
        };
        setSurahNumber((prev) => (dir === "next" ? prev + 1 : prev - 1));
        setSurah(newSurah);
        setSurahLoad(true);
      });
    });
  };

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const number = Number((e.currentTarget.elements[0] as HTMLInputElement).value.split("-")[0]);
    if (!isNaN(number)) {
      surahClickHandler(number);
    }
  };

  // Effects
  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/meta").then((res) =>
      res.json().then((result) => {
        setSurahs(result.data.surahs.references);
        setDataLoad(true);
      })
    );
  }, []);

  return (
    <surahContext.Provider
      value={{
        dataLoaded,
        surahs,
        surah,
        surahNumber,
        surahLoaded,
        surahClickHandler,
        arrowHandler,
        searchHandler,
      }}
    >
      {props.children}
    </surahContext.Provider>
  );
};

export { surahContext, SurahState };
