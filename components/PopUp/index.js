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

  const Add = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13 2H11V11H2L2 13H11L11 22H13L13 13L22 13V11L13 11V2Z"
          fill="white"
        />
      </svg>
    );
  };

  const CloseOut = () => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.6569 1.75735L10.2426 0.343135L6 4.58578L1.75736 0.343135L0.343146 1.75735L4.58579 5.99999L0.343146 10.2426L1.75736 11.6568L6 7.4142L10.2426 11.6568L11.6569 10.2426L7.41421 5.99999L11.6569 1.75735Z"
          fill="black"
        />
      </svg>
    );
  };

  return (
    <div className="fixed bottom-0 right=0 left-0 w-full p-5 pt-8 bg-white h-auto z-[1000]">
      <div className="flex flex-col justify-between h-full md:max-w-lg md:m-auto">
        <div className="flex flex-row justify-between items-center w-full mb-8">
          <div className="flex flex-row justify-between items-center border border-solid border-black rounded-xl w-full relative">
            <input
              className="px-3 py-3 uppercase font-GroteskRegular text-2xl focus:border-black focus:ring-0 bg-transparent rounded-xl w-full text-black"
              placeholder="Distance"
              input
              type="number"
              inputmode="decimal"
              onChange={handleChange}
              value={inputValue}
            ></input>
            <UnitToggle />
          </div>
          <div className="flex justify-center items-center ml-[4px]">
            <button className="bg-black rounded-lg w-full p-4">
              <Add />
            </button>
          </div>
        </div>
        <div
          className={`text-2xl text-black uppercase font-GroteskMedium w-full ${
            inputValue ? "opacity-25" : ""
          }`}
        >
          <ul>
            <li
              className="flex flex-row items-center justify-between w-full py-1 cursor-pointer"
              onClick={() => setDistance(unit === "MI" ? "1.0" : "1.61")}
            >
              <li>Mile</li>
              <span className="flex flex-row items-center justify-between text-[#7F7C81] text-[16pt] border border-solid border-black rounded-lg px-2 py-[.5px]">
                <li className="mr-4">{unit === "MI" ? "1.0" : "1.61"}</li>
                <CloseOut />
              </span>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-1 cursor-pointer"
              onClick={() => setDistance(unit === "MI" ? "3.1" : "5.0")}
            >
              <li>5K</li>
              <span className="flex flex-row items-center justify-between text-[#7F7C81] text-[16pt] border border-solid border-black rounded-lg px-2 py-[.5px]">
                <li className="mr-4">{unit === "MI" ? "3.1" : "5.0"}</li>
                <CloseOut />
              </span>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-1 cursor-pointer"
              onClick={() => setDistance(unit === "MI" ? "6.2" : "10.0")}
            >
              <li>10K</li>
              <span className="flex flex-row items-center justify-between text-[#7F7C81] text-[16pt] border border-solid border-black rounded-lg px-2 py-[.5px]">
                <li className="mr-4">{unit === "MI" ? "6.2" : "10.0"}</li>
                <CloseOut />
              </span>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-1"
              onClick={() => setDistance(unit === "MI" ? "13.1" : "21.8")}
            >
              <li>Half</li>
              <span className="flex flex-row items-center justify-between text-[#7F7C81] text-[16pt] border border-solid border-black rounded-lg px-2 py-[.5px]">
                <li className="mr-4">{unit === "MI" ? "13.1" : "21.8"}</li>
                <CloseOut />
              </span>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-1"
              onClick={() => setDistance(unit === "MI" ? "26.2" : "42.16")}
            >
              <li>Marathon</li>
              <span className="flex flex-row items-center justify-between text-[#7F7C81] text-[16pt] border border-solid border-black rounded-lg px-2 py-[.5px]">
                <li className="mr-4">{unit === "MI" ? "26.2" : "42.16"}</li>
                <CloseOut />
              </span>
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
