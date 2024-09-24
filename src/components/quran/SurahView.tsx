import React, { useContext } from "react";
import tasmyaImg from "../../assets/tasmya.png";
import tasdeeqImg from "../../assets/tasdeeq.png";
import { surahContext } from "../../contexts/surahContext";
import LoadingSpinner from "../website-loading";
import { SoArrowLeft, SoArrowRight } from "solom-icon";

const SurahView: React.FC = () => {
  const context = useContext(surahContext);

  if (!context) {
    return <div>Context not provided</div>;
  }

  const { surahs, surahNumber, surah, arrowHandler, surahLoaded } = context;

  return (
    <div className="surah-view">
      <div className="reading">
        {surah ? (
          <>
            <div className="name">
              <div className={`arrow right bg-[#76c853] rounded-md p-1 ${surahNumber === surahs.length ? "disable" : ""}`} onClick={() => arrowHandler("next")}>
                <SoArrowRight />
              </div>
              <div className={`arrow left bg-[#76c853] rounded-md p-1 ${surahNumber === 1 ? "disable" : ""}`} onClick={() => arrowHandler("prev")}>
                <SoArrowLeft />
              </div>
              <h1>{surahLoaded ? surah.name_ar : <div>جاري التحميل</div>}</h1>
              <h2>{surahLoaded ? surah.name_en : "جاري التحميل"}</h2>
            </div>
            <div className="ayahs-container">
              <div className="tasmya w-full">
                {surahLoaded ? (
                  <img className="mx-auto mb-6" src={tasmyaImg} alt="بسم الله الرحمن الرحيم" />
                ) : (
                  <div className="loaded-lg"></div>
                )}
              </div>
              <div className="ayahs">
                {surahLoaded ? (
                  surah.ayahs.map(
                    (ayah: { number: number; numberInSurah: number; text: string }) => (
                      <React.Fragment key={ayah.number}>
                        <span className="ayah-text">{ayah.text}</span>
                        <span className="ayah-num">&#40;{ayah.numberInSurah}&#41;</span>
                      </React.Fragment>
                    )
                  )
                ) : (
                  <div className="loaded"></div>
                )}
              </div>
              <div className="tasmya w-full">
                {surahLoaded ? (
                  <img className="mx-auto" src={tasdeeqImg} alt="صدق الله العظيم" />
                ) : (
                  <LoadingSpinner />
                )}
              </div>
            </div>
          </>
        ) : (
          <center>
            <h2>برجاء إختيار سورة</h2>
          </center>
        )}
      </div>
    </div>
  );
};

export default SurahView;
