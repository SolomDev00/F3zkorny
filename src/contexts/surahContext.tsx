/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState, ReactNode } from "react";

interface Surah {
  name_ar: string;
  name_en: string;
  ayahs: { number: number; numberInSurah: number; text: string }[];
}

interface SurahContextType {
  dataLoaded: boolean;
  surahs: { number: number; name: string; revelationType: string; numberOfAyahs: number }[];
  surah: Surah | null;
  surahNumber: number;
  surahLoaded: boolean;
  surahClickHandler: (num: number) => void;
  arrowHandler: (dir: string) => void;
  searchHandler: (e: React.FormEvent) => void;
}

const surahContext = createContext<SurahContextType | undefined>(undefined);

const SurahState: React.FC<{ children: ReactNode }> = (props) => {
  const [dataLoaded, setDataLoad] = useState(false);
  const [surahs, setSurahs] = useState([]);
  const [surah, setSurah] = useState<Surah | null>(null);
  const [surahNumber, setSurahNumber] = useState(NaN);
  const [surahLoaded, setSurahLoad] = useState(false);

  const surahClickHandler = (num: number) => {
    setSurahLoad(false);
    setSurahNumber(num);
    fetch(`http://api.alquran.cloud/v1/surah/${num}`).then((res) => {
      res.json().then((result) => {
        const data = result.data;
        const surah = {
          name_ar: data.name,
          name_en: data.englishName,
          ayahs: data.ayahs,
        };
        setSurah(surah);
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
        const surah = {
          name_ar: data.name,
          name_en: data.englishName,
          ayahs: data.ayahs,
        };
        setSurahNumber((prev) => (dir === "next" ? prev + 1 : prev - 1));
        setSurah(surah);
        setSurahLoad(true);
      });
    });
  };

  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const surahInput = form.elements.namedItem("surah-name") as HTMLInputElement | null;

    if (surahInput && surahInput.value) {
      const number = Number(surahInput.value.split("-")[0]);

      if (!isNaN(number)) {
        surahClickHandler(number);
      }
    } else {
      console.error("Surah input not found");
    }
  };


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
