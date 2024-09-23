import React, { useContext } from "react";
import Zekr from "./Zekr";
import ZekrView from "./ZekrView";
import { azkarContext } from "../../../contexts/azkarContext";
import azkarApi from "../../../jsons/azkar.json";

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
  const context = useContext(azkarContext);

  if (!context) {
    return <div>Error: azkarContext not provided!</div>;
  }

  const { zekr } = context;

  return (
    <div className="azkar route-h">
      <div className="parent">
        <div className="top">
          {azkarApi.map((ele: AzkarData) => {
            return (
              <Zekr
                key={ele.id}
                name={ele.name}
                count={ele.data.length}
                icon={ele.icon}
                id={ele.id}
              />
            );
          })}
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
