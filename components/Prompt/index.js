import React from "react";
import styles from "./styles.module.scss";
import DownArrow from "../DownArrow";
import { useState } from "react";

function Prompt() {
  const InputsDistances = () => {
    const handleClick = (distance) => {
      setCurrentDistance(distance);
      toggleHandler();
    };

    return (
      <ul className="font-GroteskRegular text-3xl text-black py-8">
        <div className="flex flex-row items-center justify-between py-1 cursor-pointer">
          <li onClick={() => handleClick("5K")}>5K</li>
          <li className="text-[#7f7c81]">3.1</li>
        </div>
        <div className="flex flex-row items-center justify-between py-1 cursor-pointer">
          <li onClick={() => handleClick("10K")}>10K</li>
          <li className="text-[#7f7c81]">6.2</li>
        </div>
        <div className="flex flex-row items-center justify-between py-1 cursor-pointer">
          <li onClick={() => handleClick("Half Marathon")}>Half Marathon</li>
          <li className="text-[#7f7c81]">13.1</li>
        </div>
        <div className="flex flex-row items-center justify-between py-1 cursor-pointer">
          <li onClick={() => handleClick("Marathon")}>Marathon</li>
          <li className="text-[#7f7c81]">26.2</li>
        </div>
      </ul>
    );
  };

  const InputTray = () => {
    return (
      <div className="fixed bottom-0 left-0 w-full bg-white p-5 z-3">
        <InputsDistances />
      </div>
    );
  };

  const Obscurer = () => {
    return (
      <div className="fixed inset-0 bg-black opacity-75 h-screen w-screen z-2"></div>
    );
  };

  const [currentDistance, setCurrentDistance] = useState("Half Marathon");
  const [open, setOpen] = useState(false);

  const toggleHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="text-[#7f7c81] text-5xl md:text-6xl font-GroteskRegular max-w-sm md:max-w-6xl my-9 tracking-[0.9 px]">
        <h1 className="leading-[56px] md:leading-tight">
          I want to run a{" "}
          <span className={styles.underline} onClick={() => toggleHandler()}>
            {currentDistance}
            <DownArrow />
          </span>
          in{" "}
          <span className={styles.underline} onClick={() => toggleHandler()}>
            1:21:00
            <DownArrow />
          </span>
          your pace needs to be <span className={styles.underline}>6:05/m</span>
          .
        </h1>
      </div>
      {open && (
        <span onClick={() => toggleHandler()} className="cursor-pointer">
          <Obscurer />
        </span>
      )}
      {open && <InputTray />}
    </>
  );
}

export default Prompt;
