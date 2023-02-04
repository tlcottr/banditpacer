import { ModeToggleContext } from "@/components/ModeToggleProvider";
import { useState, useContext, useEffect } from "react";
import PopUp from "@/components/PopUp";
import PopUpFinish from "@/components/PopUpFinish";
import PopUpPace from "@/components/PopUpPace";
import { UnitToggleContext } from "@/components/UnitToggleProvider";

export default function Home() {
  const [openDistance, setOpenDistance] = useState(false);
  const [openFinish, setOpenFinish] = useState(false);
  const [openPace, setOpenPace] = useState(false);
  const { selected, setSelected } = useContext(ModeToggleContext);
  const { unit, setUnit } = useContext(UnitToggleContext);
  const [inputValue, setInputValue] = useState();
  const [inputFinishValue, setInputFinishValue] = useState();
  const [inputPaceValue, setInputPaceValue] = useState();
  const [result, setResult] = useState("");
  const [resulted, setResulted] = useState("");
  const [result2, setResult2] = useState("");
  const [resulted2, setResulted2] = useState("");

  // Calculations //
  const calculateResult = () => {
    let timeInSeconds = 0;
    const timeArray = inputFinishValue.split(":");
    timeInSeconds += parseInt(timeArray[0], 10) * 3600;
    timeInSeconds += parseInt(timeArray[1], 10) * 60;
    timeInSeconds += parseInt(timeArray[2], 10);
    const paceInSeconds = timeInSeconds / inputValue;
    const minutes = Math.floor(paceInSeconds / 60);
    const seconds = Math.floor(paceInSeconds % 60);
    const result = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    return result;
  };

  const calculateFinishTime = () => {
    let paceInSeconds = 0;
    const paceArray = inputPaceValue.split(":");
    paceInSeconds += parseInt(paceArray[0], 10) * 60;
    paceInSeconds += parseInt(paceArray[1], 10);
    const timeInSeconds = paceInSeconds * inputValue;
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const result2 = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    console.log(result2);
    return result2;
  };

  const handleCalculate = (result) => {
    calculateResult();
    const resulted = setResulted(result);
    return [resulted, result];
  };
  const handleCalculate2 = (result2) => {
    calculateFinishTime();
    const resulted2 = setResulted2(result2);
    return [resulted2, result2];
  };

  useEffect(() => {
    if (inputValue && inputFinishValue) {
      setResult(calculateResult());
    }
  }, [inputValue, inputFinishValue, unit]);

  useEffect(() => {
    if (inputValue && inputPaceValue) {
      setResult2(calculateFinishTime());
    }
  }, [inputValue, inputPaceValue, unit]);

  // Handlers //

  const distanceHandler = () => {
    setOpenDistance(!openDistance);
  };

  const finishHandler = () => {
    setOpenFinish(!openFinish);
  };

  const paceHandler = () => {
    setOpenPace(!openPace);
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

  const setDistanceParentInputValue = (value) => {
    setInputValue(value);
    distanceHandler();
  };
  const setFinishParentInputValue = (finalValue) => {
    setInputFinishValue(finalValue);
    finishHandler();
  };
  const setPaceParentInputValue = (paceValue) => {
    setInputPaceValue(paceValue);
    paceHandler();
  };

  const Obscurer = (props) => {
    return (
      <div
        className="fixed inset-0 w-full p-5 bg-black opacity-50 h-full z-[1] transition-opacity"
        onClick={props.onClick}
      ></div>
    );
  };
  const Prompt = () => {
    return (
      <div className="relative">
        <div className="h-full">
          <div className="py-8 font-GroteskMedium text-5xl">
            {selected === "PACE" ? (
              <div>LET’S PACE IT OUT.</div>
            ) : (
              <div>TIME TO FINISH STRONG.</div>
            )}
          </div>
          <div className="">
            <div className="flex flex-row space-between items-center border border-solid border-white rounded-xl w-full mb-2 relative">
              <input
                className="px-3 py-3 uppercase font-GroteskRegular text-2xl focus:border-white focus:ring-0 bg-transparent rounded-xl w-full placeholder-white"
                placeholder="Distance"
                value="Distance"
                onChange={(e) => distanceValueHandler(e.target.value)}
                onClick={() => distanceHandler()}
              ></input>
              {inputValue ? (
                <button
                  className="uppercase bg-white py-[6px] px-3 rounded-lg text-black text-xl absolute right-3 flex flex-row items-center justify-between"
                  onClick={() => distanceHandler()}
                >
                  <span className="pr-3">
                    {inputValue}
                    <span className="text-[16px] text-GroteskMedium px-1">
                      {unit === "MI" ? "MI" : "KM"}
                    </span>
                  </span>
                  <span className="">
                    <CloseOut />
                  </span>
                </button>
              ) : (
                <button
                  className="uppercase bg-[#C97900] py-[6px] px-3 rounded-lg absolute right-3"
                  onClick={() => distanceHandler()}
                >
                  Set
                </button>
              )}
            </div>

            {selected === "TIME" ? (
              <div className="flex flex-row space-between items-center border border-solid border-white rounded-xl w-full mb-2 relative">
                <input
                  className="px-3 py-3 uppercase font-GroteskRegular text-2xl focus:border-white focus:ring-0 bg-transparent rounded-xl w-full placeholder-white"
                  placeholder="Pace"
                  value="Pace"
                ></input>
                {inputPaceValue ? (
                  <button
                    className="uppercase bg-white py-[6px] px-3 rounded-lg text-black text-xl absolute right-3 flex flex-row items-center justify-between"
                    onClick={() => paceHandler()}
                  >
                    <span className="pr-3">{inputPaceValue}</span>
                    <span className="">
                      <CloseOut />
                    </span>
                  </button>
                ) : (
                  <button
                    className="uppercase bg-[#C97900] py-[6px] px-3 rounded-lg absolute right-3"
                    onClick={() => paceHandler()}
                  >
                    Set
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-row space-between items-center border border-solid border-white rounded-xl w-full mb-2 relative">
                <input
                  className="px-3 py-3 uppercase font-GroteskRegular text-2xl focus:border-white focus:ring-0 bg-transparent rounded-xl w-full placeholder-white"
                  placeholder="Finish Time"
                  value="Finish Time"
                  onClick={() => finishHandler()}
                  onChange={(e) => distanceValueHandler(e.target.value)}
                ></input>
                {inputFinishValue ? (
                  <button
                    className="uppercase bg-white py-[6px] px-3 rounded-lg text-black text-xl absolute right-3 flex flex-row items-center justify-between"
                    onClick={() => finishHandler()}
                  >
                    <span className="pr-3">{inputFinishValue}</span>
                    <span className="">
                      <CloseOut />
                    </span>
                  </button>
                ) : (
                  <button
                    className="uppercase bg-[#C97900] py-[6px] px-3 rounded-lg absolute right-3"
                    onClick={() => finishHandler()}
                  >
                    Set
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="px-3 py-6 w-full fixed bottom-0 right-0 left-0 md:max-w-lg md:m-auto">
          <div className="pt-3 border-t border-solid border-white">
            {selected === "TIME" ? (
              <button
                className="bg-[#C97900] w-full rounded-lg mt-2 px-3 py-3 uppercase font-GroteskRegular text-3xl focus:border-white focus:ring-0 z-[100]"
                onClick={handleCalculate2}
              >
                <span
                  className={`${
                    inputValue || inputFinishValue
                      ? "opacity-100"
                      : "opacity-50"
                  }`}
                >
                  Pace Me
                </span>
              </button>
            ) : (
              <button
                className="bg-[#C97900] w-full rounded-lg mt-2 px-3 py-3 uppercase font-GroteskRegular text-3xl focus:border-white focus:ring-0 z-[100]"
                onClick={handleCalculate}
              >
                <span
                  className={`${
                    inputValue || inputFinishValue
                      ? "opacity-100"
                      : "opacity-50"
                  }`}
                >
                  Time Me
                </span>
              </button>
            )}
          </div>
        </div>
        {openPace && (
          <>
            <PopUpPace
              onPaceButtonClick={(paceValue) =>
                setPaceParentInputValue(paceValue)
              }
            />
            <Obscurer onClick={paceHandler} />
          </>
        )}
        {openFinish && (
          <>
            <PopUpFinish
              onFinishButtonClick={(finalValue) =>
                setFinishParentInputValue(finalValue)
              }
            />
            <Obscurer onClick={finishHandler} />
          </>
        )}
        {openDistance && (
          <>
            <PopUp
              onButtonClick={(value) => setDistanceParentInputValue(value)}
            />
            <Obscurer onClick={distanceHandler} />
          </>
        )}
      </div>
    );
  };

  const Result = () => {
    return (
      <div>
        {selected === "PACE" ? (
          <div className="">
            <div className="py-8 font-GroteskMedium text-5xl">
              NICE LOOKIN’ PACE.
            </div>
            <div className="w-full bg-[#BF3E2B] p-4 rounded-md flex flex-col justify-between mb-2">
              <span className="text-black text-xl uppercase font-GroteskMedium mb-4">
                Your Pace
              </span>
              <div className="bg-[#C4A6A8] text-black text-7xl uppercase font-GroteskMedium px-2 py-1 rounded-md flex flex-row justify-between items-end">
                <span>{result}</span>
                <span className="text-3xl">
                  {unit === "MI" ? "/MI" : "/KM"}
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 bg-[#2C4A18] p-4 rounded-md flex flex-col justify-between mr-1">
                <span className="text-black text-xl uppercase font-GroteskMedium mb-4">
                  Dist
                </span>
                <div className="bg-[#94A89C] text-black text-3xl uppercase font-GroteskMedium px-2 py-1 rounded-md flex flex-row justify-between items-end">
                  <span>{inputValue}</span>
                  <span className="text-3xl">
                    {unit === "MI" ? "MI" : "KM"}
                  </span>
                </div>
              </div>
              <div className="w-1/2 bg-[#4A599C] p-4 rounded-md flex flex-col justify-between ml-1">
                <span className="text-black text-xl uppercase font-GroteskMedium mb-4">
                  Time
                </span>
                <div className="bg-[#A3B0B6] text-black text-3xl uppercase font-GroteskMedium px-2 py-1 rounded-md flex flex-row justify-between items-end">
                  <span>{inputFinishValue}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="py-8 font-GroteskMedium text-5xl">
              NICE LOOKIN’ PACE.
            </div>
            <div className="w-full bg-[#BF3E2B] p-4 rounded-md flex flex-col justify-between mb-2">
              <span className="text-black text-xl uppercase font-GroteskMedium mb-4">
                Your Finish Time
              </span>
              <div className="bg-[#C4A6A8] text-black text-7xl uppercase font-GroteskMedium px-2 py-1 rounded-md flex flex-row justify-between items-end">
                <span>{result2}</span>
                <span className="text-3xl">
                  {unit === "MI" ? "/MI" : "/KM"}
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 bg-[#2C4A18] p-4 rounded-md flex flex-col justify-between mr-1">
                <span className="text-black text-xl uppercase font-GroteskMedium mb-4">
                  Dist
                </span>
                <div className="bg-[#94A89C] text-black text-3xl uppercase font-GroteskMedium px-2 py-1 rounded-md flex flex-row justify-between items-end">
                  <span>{inputValue}</span>
                  <span className="text-3xl">
                    {unit === "MI" ? "MI" : "KM"}
                  </span>
                </div>
              </div>
              <div className="w-1/2 bg-[#4A599C] p-4 rounded-md flex flex-col justify-between ml-1">
                <span className="text-black text-xl uppercase font-GroteskMedium mb-4">
                  Pace
                </span>
                <div className="bg-[#A3B0B6] text-black text-3xl uppercase font-GroteskMedium px-2 py-1 rounded-md flex flex-row justify-between items-end">
                  <span>{inputPaceValue}</span>
                  <span className="text-3xl">
                    {unit === "MI" ? "/MI" : "/KM"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="px-3 py-6 w-full fixed bottom-0 right-0 left-0 md:max-w-lg md:m-auto">
          <div className="pt-3 border-t border-solid border-white">
            <button className="bg-[#C97900] w-full rounded-lg mt-2 px-3 py-3 uppercase font-GroteskRegular text-3xl focus:border-white focus:ring-0 z-[100] mb-2">
              <span className="opacity-100">Share</span>
            </button>
            <button
              className="w-full rounded-lg mt-2 px-3 py-3 uppercase font-GroteskRegular text-3xl focus:border-white focus:ring-0 z-[100] border border-solid border-white"
              onClick={(event) => (window.location.href = "/")}
            >
              <span className="opacity-100">Restart</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return <>{resulted || resulted2 ? <Result /> : <Prompt />}</>;
}
