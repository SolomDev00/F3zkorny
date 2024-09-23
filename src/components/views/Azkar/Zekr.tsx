import useAzkarContext from "../../../contexts/azkarContext";
import sunImg from "../../../assets/sun.png";
import moonImg from "../../../assets/moon.png";
import studyingImg from "../../../assets/studying.png";
import rainImg from "../../../assets/rain.png";
import prayImg from "../../../assets/pray.png";

const imgs: Record<string, string> = {
  sun: sunImg,
  moon: moonImg,
  studying: studyingImg,
  rain: rainImg,
  pray: prayImg,
};

interface ZekrProps {
  id: number;
  name: string;
  count: number;
  icon: keyof typeof imgs;
}

const Zekr: React.FC<ZekrProps> = ({ id, name, count, icon }) => {
  const { zekrClickHandler } = useAzkarContext();

  return (
    <div className="zekr text-right" id={String(id)} onClick={() => zekrClickHandler(id)}>
      <h1>{name}</h1>
      <h2>
        {count} {count > 10 ? "ذِكر" : "أذكار"}
      </h2>
      <img className="icon" src={imgs[icon]} alt={name} />
    </div>
  );
};

export default Zekr;
