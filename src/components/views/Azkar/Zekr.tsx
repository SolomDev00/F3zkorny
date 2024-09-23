import { useContext } from "react";
import sunImg from "../../../assets/sun.png";
import moonImg from "../../../assets/moon.png";
import studingImg from "../../../assets/studying.png";
import rainImg from "../../../assets/rain.png";
import prayImg from "../../assets/imgs/pray.png";
import { azkarContext } from "../../../contexts/azkarContext";

const imgs = {
  sun: sunImg,
  moon: moonImg,
  studying: studingImg,
  rain: rainImg,
  pray: prayImg,
};

const Zekr = ({ id, name, count, icon }) => {
  const { zekrClickHandler } = useContext(azkarContext);
  return (
    <div className="zekr" id={id} onClick={() => zekrClickHandler(id)}>
      <h1>{name}</h1>
      <h2>
        {count} {count > 10 ? "ذِكر" : "أذكار"}
      </h2>
      <img className="icon" src={imgs[icon]} alt="" />
    </div>
  );
};

export default Zekr;
