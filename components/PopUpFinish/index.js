import { useState, useEffect } from "react";

const PopUpFinish = ({ onFinishButtonClick }) => {
  const [inputValueHours, setInputValueHours] = useState("");
  const [inputValueMinutes, setInputValueMinutes] = useState("");
  const [inputValueSeconds, setInputValueSeconds] = useState("");
  const [finalValue, setFinalValue] = useState("");

  useEffect(() => {
    setFinalValue(
      `${inputValueHours}:${inputValueMinutes}:${inputValueSeconds}`
    );
  }, [inputValueHours, inputValueMinutes, inputValueSeconds]);

  const handleButtonClickFinish = () => {
    console.log(finalValue);
    onFinishButtonClick(finalValue);
  };

  const handleChangeHours = (e) => {
    setInputValueHours(e.target.value);
  };
  const handleChangeMinutes = (e) => {
    setInputValueMinutes(e.target.value);
  };
  const handleChangeSeconds = (e) => {
    setInputValueSeconds(e.target.value);
  };

  return (
    <div className="fixed bottom-0 right=0 left-0 w-full p-5 pt-8 bg-white h-auto z-[1000]">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-row justify-between items-center w-full mb-8 relative">
          <div className="flex flex-row items-center justify-between mr-[4px] relative">
            <input
              className="px-3 py-3 uppercase font-GroteskRegular text-2xl border border-black border-solid focus:border-black focus:ring-0 bg-transparent rounded-xl w-full text-black"
              placeholder="00"
              input
              type="number"
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
              value={inputValueSeconds}
            ></input>
            <div className="text-2xl text-black uppercase font-GroteskRegular absolute right-4">
              S
            </div>
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
              className="flex flex-row items-center justify-between w-full py-2 cursor-pointer"
              onClick={() =>
                setInputValueHours("02") ||
                setInputValueMinutes("53") ||
                setInputValueSeconds("00")
              }
            >
              <li>Boston</li>
              <li className="text-[#7F7C81]">02:53:00</li>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-2 cursor-pointer"
              onClick={() =>
                setInputValueHours("02") ||
                setInputValueMinutes("53") ||
                setInputValueSeconds("00")
              }
            >
              <li>New York</li>
              <li className="text-[#7F7C81]">02:53:00</li>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-2 cursor-pointer"
              onClick={() =>
                setInputValueHours("02") ||
                setInputValueMinutes("53") ||
                setInputValueSeconds("00")
              }
            >
              <li>London</li>
              <li className="text-[#7F7C81]">02:53:00</li>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-2"
              onClick={() =>
                setInputValueHours("02") ||
                setInputValueMinutes("53") ||
                setInputValueSeconds("00")
              }
            >
              <li>Berlin</li>
              <li className="text-[#7F7C81]">02:53:00</li>
            </li>
            <li
              className="flex flex-row items-center justify-between w-full py-2"
              onClick={() =>
                setInputValueHours("02") ||
                setInputValueMinutes("53") ||
                setInputValueSeconds("00")
              }
            >
              <li>Chicago</li>
              <li className="text-[#7F7C81]">02:53:00</li>
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
