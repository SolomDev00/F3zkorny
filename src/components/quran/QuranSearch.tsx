import React, { useContext, FormEvent } from "react";
import Surah from "./Surah";
import { surahContext } from "../../contexts/surahContext";

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
      <h1>السُوَر</h1>
      <div className="search-inp">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="البحث عن سورة"
            list="surahs-names"
            id="surah-name"
            name="surah-name"
          />
          <button>إختيار</button>
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
            <h3>إنتظر حتى تحميل البيانات</h3>
          </center>
        )}
      </div>
    </div>
  );
};

export default QuranSearch;
