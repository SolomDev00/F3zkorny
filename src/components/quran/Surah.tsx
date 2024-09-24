import React, { useContext } from "react";
import { surahContext } from "../../contexts/surahContext";

interface SurahProps {
  active?: boolean;
  name: string;
  type: string;
  ayahs: number;
  num: number;
}

const Surah: React.FC<SurahProps> = ({ active, name, type, ayahs, num }) => {
  const context = useContext(surahContext);

  if (!context) {
    return null;
  }

  const { surahClickHandler } = context;

  return (
    <div
      className={`surah ${active ? "active" : ""}`}
      onClick={() => surahClickHandler(num)}
    >
      <div className="title">{name}</div>
      <div className="disc">
        {type === "Meccan" ? "مكية" : "مدنية"} / {ayahs}{" "}
        {ayahs <= 10 ? "آيات" : "آيه"}
      </div>
    </div>
  );
};

export default Surah;
