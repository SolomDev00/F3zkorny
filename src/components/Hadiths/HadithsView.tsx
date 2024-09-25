import { useContext } from "react";
import { HadithsContext } from "../../contexts/hadithsContext";
import { SoArrowLeft, SoArrowRight } from "solom-icon";

const HadithsView: React.FC = () => {
  const { currentCategory, currentHadithsItem, navigateHadiths, currentHadithsIndex } = useContext(HadithsContext)!;

  if (!currentCategory || !currentHadithsItem) {
    return <div>لا يوجد حديث</div>;
  }

  return (
    <div className="zekr-view">
      <h1>{currentCategory.name}</h1>
      <h2>
        {currentHadithsIndex + 1}/{currentCategory.data.length}
      </h2>
      <div className="zekr-container">
        <p>{currentHadithsItem.text}</p>
        <div>{currentHadithsItem.disc}</div>
      </div>
      <div className="arrows">
        <div className={`boxArr bg-[#76c853] rounded-md p-2 ${currentHadithsIndex === 0 ? "disable" : ""}`} onClick={() => navigateHadiths("next")}>
          <SoArrowLeft />
        </div>
        <div className={`boxArr bg-[#76c853] rounded-md p-2 ${currentHadithsIndex === currentCategory.data.length - 1 ? "disable" : ""}`} onClick={() => navigateHadiths("prev")}>
          <SoArrowRight />
        </div>
      </div>
    </div>
  );
};

export default HadithsView;
