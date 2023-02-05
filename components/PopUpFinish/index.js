import { useState, useEffect } from "react";

const PopUpFinish = ({ onFinishButtonClick }) => {
  const [inputValueHours, setInputValueHours] = useState("");
  const [inputValueMinutes, setInputValueMinutes] = useState("");
  const [inputValueSeconds, setInputValueSeconds] = useState("");
  const [finalValue, setFinalValue] = useState("");

  useEffect(() => {
    setFinalValue(
      `${inputValueHours || "00"}:${inputValueMinutes || "00"}:${
        inputValueSeconds || "00"
      }`
    );
  }, [inputValueHours, inputValueMinutes, inputValueSeconds]);

  const handleButtonClickFinish = () => {
    onFinishButtonClick(finalValue);
  };

  const handleChangeHours = (e) => {
    setInputValueHours(e.target.value || "00");
  };
  const handleChangeMinutes = (e) => {
    setInputValueMinutes(e.target.value || "00");
  };
  const handleChangeSeconds = (e) => {
    setInputValueSeconds(e.target.value || "00");
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
        <div className="flex flex-row justify-between items-center w-full mb-8 relative">
          <div className="flex flex-row items-center justify-between mr-[4px] relative">
            <input
              className="px-3 py-3 uppercase font-GroteskRegular text-2xl border border-black border-solid focus:border-black focus:ring-0 bg-transparent rounded-xl w-full text-black"
              placeholder="00"
              input
              type="number"
              inputmode="decimal"
              onChange={handleChangeHours}
              value={inputValueHours}
            ></input>
            <div className="text-2xl text-black uppercase font-GroteskRegular absolute right-4">
              H
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mx-[4px] relative">
            <input
              className="px-3 py-3 uppercase font-GroteskRegular text-2xl border border-black border-solid focus:border-black focus:ring-0 bg-transparent rounded-xl w-full text-black"
              placeholder="00"
              input
              type="number"
              inputmode="decimal"
              onChange={handleChangeMinutes}
              value={inputValueMinutes}
            ></input>
            <div className="text-2xl text-black uppercase font-GroteskRegular absolute right-4">
              M
            </div>
          </div>
          <div className="flex flex-row items-center justify-between ml-[4px] relative">
            <input
              className="px-3 py-3 uppercase font-GroteskRegular text-2xl border border-black border-solid focus:border-black focus:ring-0 bg-transparent rounded-xl w-full text-black"
              placeholder="00"
              input
              type="number"
              onChange={handleChangeSeconds}
              inputmode="decimal"
              value={inputValueSeconds}
            ></input>
            <div className="text-2xl text-black uppercase font-GroteskRegular absolute right-4">
              S
            </div>
          </div>
          <div className="flex justify-center items-center ml-[8px]">
            <button className="bg-black rounded-lg w-full p-4">
              <Add />
            </button>
          </div>
        </div>
        <div
          className={`text-2xl text-black uppercase font-GroteskMedium w-full ${
            inputValueHours || inputValueMinutes || inputValueSeconds
              ? "opacity-25"
              : ""
          }`}
        >
          <ul>
            <li
              className="flex flex-row items-center justify-between w-full py-1 cursor-pointer"
              onClick={() =>
                setInputValueHours("02") ||
                setInputValueMinutes("50") ||
                setInputValueSeconds("48")
              }
            >
              <li>Boston</li>
              <span className="flex flex-row items-center justify-between text-[#7F7C81] text-[16pt] border border-solid border-black rounded-lg px-2 py-[.5px]">
                <li className="mr-4">02:50:48</li>
                <CloseOut />
              </span>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-1 cursor-pointer"
              onClick={() =>
                setInputValueHours("02") ||
                setInputValueMinutes("50") ||
                setInputValueSeconds("48")
              }
            >
              <li>New York</li>
              <span className="flex flex-row items-center justify-between text-[#7F7C81] text-[16pt] border border-solid border-black rounded-lg px-2 py-[.5px]">
                <li className="mr-4">02:50:48</li>
                <CloseOut />
              </span>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-1 cursor-pointer"
              onClick={() =>
                setInputValueHours("03") ||
                setInputValueMinutes("50") ||
                setInputValueSeconds("00")
              }
            >
              <li>London</li>
              <span className="flex flex-row items-center justify-between text-[#7F7C81] text-[16pt] border border-solid border-black rounded-lg px-2 py-[.5px]">
                <li className="mr-4">03:50:00</li>
                <CloseOut />
              </span>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-1"
              onClick={() =>
                setInputValueHours("03") ||
                setInputValueMinutes("17") ||
                setInputValueSeconds("12")
              }
            >
              <li>Miami</li>
              <span className="flex flex-row items-center justify-between text-[#7F7C81] text-[16pt] border border-solid border-black rounded-lg px-2 py-[.5px]">
                <li className="mr-4">03:17:12</li>
                <CloseOut />
              </span>
            </li>
          </ul>
        </div>
        <div className="py-6 w-full">
          <div className="pt-3 border-t border-solid border-black">
            <button
              className="bg-[#C97900] w-full rounded-lg mt-2 px-3 py-3 uppercase font-GroteskRegular text-3xl focus:border-white focus:ring-0"
              onClick={handleButtonClickFinish}
            >
              <span
                className={
                  inputValueHours || inputValueMinutes || inputValueSeconds
                    ? "opacity-100"
                    : "opacity-50"
                }
              >
                Set Finish Time
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpFinish;
