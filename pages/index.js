import Prompt from "@/components/Prompt";
import UnitToggle from "@/components/UnitToggle";
import { ModeToggleContext } from "@/components/ModeToggleProvider";
import { UnitToggleContext } from "@/components/UnitToggleProvider";
import { useState, useContext } from "react";
import styles from "../styles/styles.module.scss";
import PopUp from "@/components/PopUp";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { selected, setSelected } = useContext(ModeToggleContext);
  const [inputValue, setInputValue] = useState();

  const distanceHandler = () => {
    setOpen(!open);
  };

  const setParentInputValue = (value) => {
    setInputValue(value);
    distanceHandler();
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
              value={inputValue}
              onChange={(e) => distanceValueHandler(e.target.value)}
            ></input>
            <button
              className="uppercase text-xl text-white absolute right-[.1em] z-10 px-3 py-3 rounded-lg"
              onClick={() => distanceHandler()}
            >
              {inputValue ? "Edit" : "Set"}
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
            <span className="opacity-50">
              {selected === "PACE" ? "PACE ME" : "TIME ME"}
            </span>
          </button>
        </div>
      </div>
      {open && (
        <>
          <PopUp onButtonClick={(value) => setParentInputValue(value)} />
          <Obscurer />
        </>
      )}
    </>
  );
}
