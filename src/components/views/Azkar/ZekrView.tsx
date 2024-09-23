/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { azkarContext } from "../../../contexts/azkarContext";

interface ZekrItem {
  text: string;
  disc: string;
}

interface Zekr {
  name: string;
  data: ZekrItem[];
}

interface AzkarContextProps {
  zekr: Zekr | null;
  zekrItem: ZekrItem | null;
  zekrNum: number;
  arrowHandler: (direction: "prev" | "next") => void;
}

const ZekrView: React.FC = () => {
  const context = useContext(azkarContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { zekr, zekrItem, arrowHandler, zekrNum } = context;

  if (!zekr) {
    return <div>من فضلك إختر ذِكر</div>;
  }

  if (!zekrItem) {
    return <div>لا يوجد ذِكر محدد حالياً</div>;
  }

  return (
    <div className="zekr-view">
      <h1>{zekr.name}</h1>
      <h2>
        {zekrNum + 1}/{zekr.data.length}
      </h2>
      <div className="zekr-container">
        <p>{zekrItem.text}</p>
        <div>{zekrItem.disc}</div>
      </div>
      <div className="arrows">
        <BsArrowLeftSquareFill
          className={`arr ${zekrNum === 0 && "disable"}`}
          onClick={() => arrowHandler("prev")}
        />
        <BsArrowRightSquareFill
          className={`arr ${zekrNum === zekr.data.length - 1 && "disable"}`}
          onClick={() => arrowHandler("next")}
        />
      </div>
    </div>
  );
};

export default ZekrView;
