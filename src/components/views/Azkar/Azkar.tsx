import React from "react";
import Zekr from "./Zekr";
import ZekrView from "./ZekrView";
import useAzkarContext from "../../../contexts/azkarContext";
import azkarApi from '../../../jsons/azkar.json'

interface ZekrData {
  text: string;
  disc: string;
}

interface AzkarData {
  id: number;
  name: string;
  icon: string;
  data: ZekrData[];
}

const Azkar: React.FC = () => {
  const { zekr } = useAzkarContext();

  return (
    <div className="azkar route-h">
      <div className="parent pr-10">
        <div className="top">
          {azkarApi.map((ele: AzkarData) => (
            <Zekr
              key={ele.id}
              name={ele.name}
              count={ele.data.length}
              icon={ele.icon}
              id={ele.id}
            />
          ))}
        </div>
        <div className="bottom">
          {zekr ? (
            <ZekrView />
          ) : (
            <h2 className="zekr-msg">من فضلك إختر ذِكر</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Azkar;
