import React, { useRef } from "react";
import Zekr from "./Zekr";
import ZekrView from "./ZekrView";
import useAzkarContext from "../../../contexts/azkarContext";
import azkarApi from '../../../jsons/azkar.json'

interface ZekrData {
  text: string;
  disc: string;
}

interface AzkarData {
  id: number;
  name: string;
  icon: string;
  data: ZekrData[];
}

const Azkar: React.FC = () => {
  const { zekr } = useAzkarContext();
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
    if (!isDown) return; // stop the function from running
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2; // the * 2 makes the scroll faster
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
          {azkarApi.map((ele: AzkarData) => (
            <Zekr
              key={ele.id}
              name={ele.name}
              count={ele.data.length}
              icon={ele.icon}
              id={ele.id}

            />
          ))}
        </div>
        <div className="bottom">
          {zekr ? (
            <ZekrView />
          ) : (
            <h2 className="zekr-msg">من فضلك إختر ذِكر</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Azkar;
