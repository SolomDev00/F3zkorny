import React, { useState } from "react";
import Zekr from "./Zekr";
import ZekrView from "./ZekrView";
import useAzkarContext from "../../../contexts/azkarContext";
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
  const { zekr } = useAzkarContext();
  const [draggingId, setDraggingId] = useState<number | null>(null);

  // handle drag start event
  const handleDragStart = (id: number) => {
    setDraggingId(id);
  };

  // handle drag over event
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Allow drop
  };

  // handle drop event
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDraggingId(null);
    console.log(`Zekr with ID ${draggingId} was dropped`);
  };

  return (
    <div className="azkar route-h">
      <div className="parent pr-10">
        <div
          className="top flex overflow-x-auto" // Enable horizontal scroll
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {azkarApi.map((ele: AzkarData) => (
            <Zekr
              key={ele.id}
              name={ele.name}
              count={ele.data.length}
              icon={ele.icon}
              id={ele.id}
              onDragStart={() => handleDragStart(ele.id)}
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
