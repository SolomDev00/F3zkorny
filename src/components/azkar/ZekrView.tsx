/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { SoArrowRight, SoArrowLeft } from "solom-icon";
import { azkarContext } from "../../contexts/azkarContext";

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
        <div className={`boxArr bg-[#76c853] rounded-md p-2 ${zekrNum === zekr.data.length - 1 && "disable"}`} onClick={() => arrowHandler("next")}>
          <SoArrowRight />
        </div>
        <div className={`boxArr bg-[#76c853] rounded-md p-2 ${zekrNum === 0 && "disable"}`} onClick={() => arrowHandler("prev")}>
          <SoArrowLeft />
        </div>
      </div>
    </div >
  );
};

export default ZekrView;
