import React from "react";
import DownArrow from "../DownArrow";

const Time = () => {
  return (
    <span className="flex nowrap text-white w-auto">
      <span className="flex flex-row items-center">
        1:21:00 <DownArrow />
      </span>
    </span>
  );
};

export default Time;
