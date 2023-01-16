import React from "react";
import styles from "./styles.module.scss";
import DownArrow from "../DownArrow";
import { useState, useEffect } from "react";

const getPace = (distance, time) => {
  let miles;
  if (distance === "Half Marathon") {
    miles = 13.1;
  } else if (distance === "Marathon") {
    miles = 26.2;
  } else if (distance === "10K") {
    miles = 6.2;
  } else if (distance === "5K") {
    miles = 3.1;
  }

  // convert time from string to seconds
  const timeInSeconds = time.split(":").reduce((acc, time) => 60 * acc + +time);
  // convert seconds to minutes
  const timeInMinutes = timeInSeconds / 60;
  // divide time by miles to get pace in minutes per mile
  let pace = timeInMinutes / miles;
  if (pace > 0) {
    const paceInMinutes = Math.floor(pace);
    const paceInSeconds = Math.round((pace - paceInMinutes) * 60);
    pace = new Date(0, 0, 0, 0, paceInMinutes, paceInSeconds)
      .toISOString()
      .substr(14, 5);
  } else {
    pace = "Pace";
  }
  return pace;
};

function Prompt() {
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("00:00:00");
  const [pace, setPace] = useState(0);

  const InputsDistances = () => {
    const handleClick = (distance) => {
      setDistance(distance);
      setCurrentDistance(distance);
      toggleHandler();
      setPace(getPace(distance, time));
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

  const InputsTime = () => {
    const [time, setTime] = useState("00:00:00");
    const [error, setError] = useState("");

    const handleClick = (time) => {
      setTime(time);
      setCurrentTime(time);
      toggleHandler();
      setPace(getPace(distance, time));
    };

    const handleChange = (e) => {
      setTime(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateTime(time)) {
        setCurrentTime(time);
        toggleHandler();
      } else {
        setError("Invalid time format. Please use the format HH:MM:SS");
      }
    };

    const validateTime = (time) => {
      // Regular expression to match time format
      const timeFormat = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
      return timeFormat.test(time);
    };

    return (
      <form onSubmit={handleSubmit}>
        <ul className="font-GroteskRegular text-3xl text-black py-8">
          <div className="flex flex-row items-center justify-between pb-8 cursor-pointer text-4xl">
            <input
              id="time-input"
              value={time}
              onChange={handleChange}
              className={`bg-white text-left max-w-[200px] ${
                error ? "border-red-500" : ""
              }`}
              placeholder="00:00:00"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm"
            >
              Update
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-row items-center justify-between py-1 cursor-pointer">
            <li onClick={() => handleClick("03:00:00")}>Boston</li>
            <li className="text-[#7f7c81]">03:00:00</li>
          </div>
          <div className="flex flex-row items-center justify-between py-1 cursor-pointer">
            <li onClick={() => handleClick("02:53:00")}>New York</li>
            <li className="text-[#7f7c81]">02:53:00</li>
          </div>
          <div className="flex flex-row items-center justify-between py-1 cursor-pointer">
            <li onClick={() => handleClick("02:54:00")}>Berlin</li>
            <li className="text-[#7f7c81]">02:54:00</li>
          </div>
        </ul>
      </form>
    );
  };

  const InputTray = ({ selected }) => {
    return (
      <div className="fixed bottom-0 left-0 w-full bg-white p-5 z-1">
        {selected === "distance" && <InputsDistances />}
        {selected === "time" && <InputsTime />}
      </div>
    );
  };

  const Obscurer = ({ onClick }) => {
    return (
      <div
        className="fixed inset-0 bg-black opacity-75 h-screen w-screen z-[0]"
        onClick={onClick}
      ></div>
    );
  };

  const [currentDistance, setCurrentDistance] = useState("Distance");
  const [currentTime, setCurrentTime] = useState("Time");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("distance");

  const toggleHandler = () => {
    setOpen(!open);
  };

  const handleDistanceClick = () => {
    setSelected("distance");
    toggleHandler();
  };

  const handleTimeClick = () => {
    setSelected("time");
    toggleHandler();
  };

  useEffect(() => {
    if (distance && time) {
      setPace(getPace(distance, time));
    }
  }, [distance, time]);

  return (
    <>
      <div className="text-[#7f7c81] text-5xl md:text-6xl font-GroteskRegular max-w-sm md:max-w-6xl my-9 tracking-[0.9 px] whitespace-normal w-full">
        <h1 className="leading-[56px] md:leading-tight">
          I want to run a{" "}
          <span
            className={styles.underline}
            onClick={() => handleDistanceClick()}
          >
            {currentDistance}
            <DownArrow />
          </span>
          in{" "}
          <span className={styles.underline} onClick={() => handleTimeClick()}>
            {currentTime}
            <DownArrow />
          </span>your pace needs to be
          <span className={styles.underline}>{pace}/mi</span>.
        </h1>
      </div>
      {open && <Obscurer onClick={toggleHandler} />}
      {open && <InputTray selected={selected} />}
    </>
  );
}

export default Prompt;
