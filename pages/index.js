import Prompt from "@/components/Prompt";
import UnitToggle from "@/components/UnitToggle";
import { ModeToggleContext } from "@/components/ModeToggleProvider";
import { UnitToggleContext } from "@/components/UnitToggleProvider";
import { useState, useContext } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { selected, setSelected } = useContext(ModeToggleContext);

  const distanceHandler = () => {
    setOpen(!open);
  };

  const PopUp = () => {
    const { selected, setSelected } = useContext(UnitToggleContext);
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
            ></input>
            <UnitToggle />
          </div>
          <div className="text-2xl text-black uppercase font-GroteskMedium w-full">
            <ul>
              <li className="flex flex-row items-center justify-between w-full py-2">
                <li>Mile</li>
                {selected === "MI" ? (
                  <li className="text-[#7F7C81]">1.0</li>
                ) : (
                  <li className="text-[#7F7C81]">1.61</li>
                )}
              </li>
              <li className="flex flex-row items-center justify-between w-full py-2">
                <li>5K</li>
                {selected === "MI" ? (
                  <li className="text-[#7F7C81]">3.1</li>
                ) : (
                  <li className="text-[#7F7C81]">5.0</li>
                )}
              </li>
              <li className="flex flex-row items-center justify-between w-full py-2">
                <li>10K</li>
                {selected === "MI" ? (
                  <li className="text-[#7F7C81]">6.2</li>
                ) : (
                  <li className="text-[#7F7C81]">10.0</li>
                )}
              </li>
              <li className="flex flex-row items-center justify-between w-full py-2">
                <li>Half</li>
                {selected === "MI" ? (
                  <li className="text-[#7F7C81]">13.1</li>
                ) : (
                  <li className="text-[#7F7C81]">21.08241</li>
                )}
              </li>
              <li className="flex flex-row items-center justify-between w-full py-2">
                <li>Marathon</li>
                {selected === "MI" ? (
                  <li className="text-[#7F7C81]">26.2</li>
                ) : (
                  <li className="text-[#7F7C81]">42.16</li>
                )}
              </li>
            </ul>
          </div>
          <div className="py-6 w-full">
            <div className="pt-3 border-t border-solid border-black">
              <button className="bg-[#C97900] w-full rounded-lg mt-2 px-3 py-3 uppercase font-GroteskRegular text-3xl focus:border-white focus:ring-0">
                <span className="opacity-50">Set Distance</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Obscurer = () => {
    return (
      <div
        className="fixed inset-0 w-full p-5 bg-black opacity-50 h-full z-[1] transition-opacity"
        onClick={distanceHandler}
      ></div>
    );
  };

  return (
    <>
      <div className="h-full">
        <div className="py-8 font-GroteskMedium text-5xl">
          {selected === "PACE" ? (
            <div>LET’S PACE IT OUT.</div>
          ) : (
            <div>TIME TO FINISH STRONG.</div>
          )}
        </div>
        <div className="">
          <div className="flex flex-row space-between items-center border border-solid borer-white rounded-xl w-full mb-2 relative">
            <input
              className="px-3 py-3 uppercase font-GroteskRegular text-2xl focus:border-white focus:ring-0 bg-transparent rounded-xl w-full"
              placeholder="Distance"
            ></input>
            <button
              className="uppercase text-xl text-white absolute right-[.1em] z-10 px-3 py-3 rounded-lg"
              onClick={() => distanceHandler()}
            >
              Set
            </button>
          </div>

          {selected === "TIME" ? (
            <div className="flex flex-row space-between items-center border border-solid borer-white rounded-xl w-full mb-2 relative">
              <input
                className="px-3 py-3 uppercase font-GroteskRegular text-2xl focus:border-white focus:ring-0 bg-transparent rounded-xl w-full"
                placeholder="Finish Time"
              ></input>
              <button className="uppercase text-xl text-white absolute right-[.1em] z-10 px-3 py-3 rounded-lg">
                Set
              </button>
            </div>
          ) : (
            <div className="flex flex-row space-between items-center border border-solid borer-white rounded-xl w-full mb-2 relative">
              <input
                className="px-3 py-3 uppercase font-GroteskRegular text-2xl focus:border-white focus:ring-0 bg-transparent rounded-xl w-full"
                placeholder="Pace"
              ></input>
              <button className="uppercase text-xl text-white absolute right-[.1em] z-10 px-3 py-3 rounded-lg">
                Set
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="px-3 py-6 w-full fixed bottom-0 right-0 left-0">
        <div className="pt-3 border-t border-solid border-white">
          <button className="bg-[#C97900] w-full rounded-lg mt-2 px-3 py-3 uppercase font-GroteskRegular text-3xl focus:border-white focus:ring-0">
            <span className="opacity-50">Pace Me</span>
          </button>
        </div>
      </div>
      {open && (
        <>
          <PopUp />
          <Obscurer />
        </>
      )}
    </>
  );
}
