import { useContext } from "react";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { HadithsContext } from "../../contexts/hadithsContext";

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
        <BsArrowRightSquareFill
          className={`arr ${currentHadithsIndex === 0 ? "disable" : ""}`}
          onClick={() => navigateHadiths("prev")}
        />
        <BsArrowLeftSquareFill
          className={`arr ${currentHadithsIndex === currentCategory.data.length - 1 ? "disable" : ""}`}
          onClick={() => navigateHadiths("next")}
        />
      </div>
    </div>
  );
};

export default HadithsView;
