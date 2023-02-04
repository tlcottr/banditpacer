import { useState, useContext } from "react";
import { UnitToggleContext } from "@/components/UnitToggleProvider";
import UnitToggle from "../UnitToggle";

const PopUp = ({ onButtonClick }) => {
  const { unit, setUnit } = useContext(UnitToggleContext);
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");

  const handleButtonClick = () => {
    onButtonClick(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const setDistance = (value) => {
    setInputValue(value);
  };

  return (
    <div className="fixed bottom-0 right=0 left-0 w-full p-5 pt-8 bg-white h-auto z-[1000]">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-row justify-between items-center border border-solid border-black rounded-xl w-full mb-8 relative">
          <input
            className="px-3 py-3 uppercase font-GroteskRegular text-2xl focus:border-black focus:ring-0 bg-transparent rounded-xl w-full text-black"
            placeholder="Enter Distance"
            input
            type="number"
            inputmode="decimal"
            onChange={handleChange}
            value={inputValue}
          ></input>
          <UnitToggle />
        </div>
        <div
          className={`text-2xl text-black uppercase font-GroteskMedium w-full ${
            inputValue ? "opacity-25" : ""
          }`}
        >
          <ul>
            <li
              className="flex flex-row items-center justify-between w-full py-2 cursor-pointer"
              onClick={() => setDistance(unit === "MI" ? "1.0" : "1.61")}
            >
              <li>Mile</li>
              {unit === "MI" ? (
                <li className="text-[#7F7C81]">1.0</li>
              ) : (
                <li className="text-[#7F7C81]">1.61</li>
              )}
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-2 cursor-pointer"
              onClick={() => setDistance(unit === "MI" ? "3.1" : "5.0")}
            >
              <li>5K</li>
              <li className="text-[#7F7C81]">{unit === "MI" ? 3.1 : 5.0}</li>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-2 cursor-pointer"
              onClick={() => setDistance(unit === "MI" ? "6.2" : "10.0")}
            >
              <li>10K</li>
              <li className="text-[#7F7C81]">{unit === "MI" ? 6.2 : 10.0}</li>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-2"
              onClick={() => setDistance(unit === "MI" ? "13.1" : "21.8")}
            >
              <li>Half</li>
              <li className="text-[#7F7C81]">{unit === "MI" ? 13.1 : 21.8}</li>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-2"
              onClick={() => setDistance(unit === "MI" ? "26.2" : "42.16")}
            >
              <li>Marathon</li>
              <li className="text-[#7F7C81]">{unit === "MI" ? 26.2 : 42.16}</li>
            </li>
          </ul>
        </div>
        <div className="py-6 w-full">
          <div className="pt-3 border-t border-solid border-black">
            <button
              className="bg-[#C97900] w-full rounded-lg mt-2 px-3 py-3 uppercase font-GroteskRegular text-3xl focus:border-white focus:ring-0"
              onClick={handleButtonClick}
            >
              <span className={inputValue ? "opacity-100" : "opacity-50"}>
                Set Distance
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
