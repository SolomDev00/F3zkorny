import React, { useContext } from "react";
import dateImg from "../../assets/imgs/date.png";
import cloverImg from "../../assets/imgs/clover.png";
import sweetImg from "../../assets/imgs/sweetener.png";
import crystalImg from "../../assets/imgs/crystal.png";
import poinImg from "../../assets/imgs/poinsettia.png";
import { hadethContext } from "../../contexts/hadethContext";

const imgs = {
  poin: poinImg,
  date: dateImg,
  sweet: sweetImg,
  clover: cloverImg,
  crystal: crystalImg,
};

const Zekr = ({ id, name, count, icon }) => {
  const { hadethClickHandler } = useContext(hadethContext);
  return (
    <div className="hadeeth" id={id} onClick={() => hadethClickHandler(id)}>
      <h1>{name}</h1>
      <h2>
        {count} {count > 10 ? "حدَيث" : "حديثاً"}
      </h2>
      <img className="icon" src={imgs[icon]} alt="" />
    </div>
  );
};

export default Zekr;
