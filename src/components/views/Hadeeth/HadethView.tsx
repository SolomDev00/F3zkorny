import React, { useContext } from "react";
import { hadethContext } from "../../contexts/hadethContext";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const HadethView = () => {
  const { hadeth, hadethItem, arrowHandler, hadethNum } =
    useContext(hadethContext);
  return (
    <div className="zekr-view">
      <h1>{hadeth.name}</h1>
      <h2>
        {hadethNum + 1}/{hadeth.data.length}
      </h2>
      <div className="zekr-container">
        <p>{hadethItem.text}</p>
        <div>{hadethItem.disc}</div>
      </div>
      <div className="arrows">
        <BsArrowRightSquareFill
          className={`arr ${hadethNum === 0 && "disable"}`}
          onClick={() => arrowHandler("prev")}
        />
        <BsArrowLeftSquareFill
          className={`arr ${hadethNum === hadeth.data.length - 1 && "disable"}`}
          onClick={() => arrowHandler("next")}
        />
      </div>
    </div>
  );
};

export default HadethView;
