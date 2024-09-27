import React, { useRef, useContext } from "react";
import azkarApi from "../../jsons/hadiths.json";
import { HadithsContext } from "../../contexts/hadithsContext";
import Hadith from "../../components/hadiths/Hadith";
import HadithsView from "../../components/hadiths/HadithsView";

const Hadiths: React.FC = () => {
  const { currentCategory } = useContext(HadithsContext)!;

  const sliderRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      isDown = true;
      sliderRef.current.classList.add("active");
      startX = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft = sliderRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    if (sliderRef.current) {
      isDown = false;
      sliderRef.current.classList.remove("active");
    }
  };

  const handleMouseUp = () => {
    if (sliderRef.current) {
      isDown = false;
      sliderRef.current.classList.remove("active");
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="azkar route-h">
      <div className="parent pr-10">
        <div
          className="top"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {azkarApi.map((ele) => (
            <Hadith
              key={ele.id}
              id={ele.id}
              name={ele.name}
              count={ele.data.length}
              icon={ele.icon as "poin" | "date" | "sweet" | "clover" | "crystal"}
            />
          ))}
        </div>
        <div className="bottom">
          {currentCategory ? (
            <HadithsView />
          ) : (
            <h2 className="zekr-msg">من فضلك إختر حديث</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hadiths;
