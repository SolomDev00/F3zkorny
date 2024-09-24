import React, { useContext, FormEvent } from "react";
import Surah from "./Surah";
import { surahContext } from "../../contexts/surahContext";
import LoadingSpinner from "../website-loading";

const QuranSearch: React.FC = () => {
  const context = useContext(surahContext);

  if (!context) {
    return <div>Context not provided</div>;
  }

  const { dataLoaded, surahs, searchHandler } = context;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    searchHandler(e);
  };

  return (
    <div className="search">
      <h1 className="mb-2">السُوَر</h1>
      <div className="search-inp">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="البحث عن سورة"
            list="surahs-names"
            id="surah-name"
            name="surah-name"
            className="w-3/4 border-2 border-gray-300 text-black focus:outline-none outline-none focus:border-2 rounded-xl px-2 py-2 text-md bg-transparent duration-200"
          />
          <button className="w-1/4">إختيار</button>
        </form>
        <datalist id="surahs-names">
          {dataLoaded &&
            surahs.map((sur) => {
              const name = sur.name
                .split("")
                .filter((char) => {
                  return char.charCodeAt(0) < 1612 || char.charCodeAt(0) === 1649;
                })
                .join("");
              return (
                <option key={sur.number} value={`${sur.number}-${name}`} />
              );
            })}
        </datalist>
      </div>

      <div className="surahs-selection">
        {dataLoaded ? (
          surahs.map((sur) => (
            <Surah
              num={sur.number}
              key={sur.number}
              name={sur.name}
              type={sur.revelationType}
              ayahs={sur.numberOfAyahs}
            />
          ))
        ) : (
          <center>
            <LoadingSpinner />
          </center>
        )}
      </div>
    </div>
  );
};

export default QuranSearch;
