import React, { useContext } from "react";
import azkarApi from "../../assets/jsons/hadeeth.json";
import { hadethContext } from "../../contexts/hadethContext";
import HadethView from "./HadethView";
import Hadeth from "./Hadeth";

const Hadeeth = () => {
  const { hadeth } = useContext(hadethContext);
  return (
    <div className="azkar route-h">
      <div className="parent">
        <div className="top">
          {azkarApi.map((ele, index) => {
            return (
              <Hadeth
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
          {hadeth ? (
            <HadethView />
          ) : (
            <h2 className="zekr-msg">من فضلك إختر حديث</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hadeeth;
