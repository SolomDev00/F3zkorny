import { useContext } from "react";
import azkarApi from "../../jsons/hadiths.json";
import Hadith from "../../components/Hadiths/Hadith";
import HadithsView from "../../components/Hadiths/HadithsView";
import { HadithsContext } from "../../contexts/hadithsContext";

const Hadiths: React.FC = () => {
  const { currentCategory } = useContext(HadithsContext)!;

  return (
    <div className="azkar route-h">
      <div className="parent">
        <div className="top">
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
          {currentCategory ? <HadithsView /> : <h2 className="zekr-msg">من فضلك إختر حديث</h2>}
        </div>
      </div>
    </div>
  );
};

export default Hadiths;
