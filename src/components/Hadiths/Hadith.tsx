import { useContext } from "react";
import dateImg from "../../assets/imgs/date.png";
import cloverImg from "../../assets/imgs/clover.png";
import sweetImg from "../../assets/imgs/sweetener.png";
import crystalImg from "../../assets/imgs/crystal.png";
import poinImg from "../../assets/imgs/poinsettia.png";
import { HadithsContext } from "../../contexts/hadithsContext";

interface HadithProps {
  id: number;
  name: string;
  count: number;
  icon: "poin" | "date" | "sweet" | "clover" | "crystal";
}

const imgs: { [key: string]: string } = {
  poin: poinImg,
  date: dateImg,
  sweet: sweetImg,
  clover: cloverImg,
  crystal: crystalImg,
};

const Hadith: React.FC<HadithProps> = ({ id, name, count, icon }) => {
  const { hadithClickHandler } = useContext(HadithsContext)!;
  return (
    <div className="hadeeth" id={`hadith-${id}`} onClick={() => hadithClickHandler(id)}>
      <h1>{name}</h1>
      <h2>
        {count} {count > 10 ? "حدَيث" : "حديثاً"}
      </h2>
      <img className="icon" src={imgs[icon]} alt={name} />
    </div>
  );
};

export default Hadith;
