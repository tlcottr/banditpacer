import Prompt from "@/components/Prompt";
import UnitToggle from "@/components/UnitToggle";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const distanceHandler = () => {
    setOpen(!open);
  };

  const PopUp = () => {
    return (
      <div className="fixed bottom-0 right=0 left-0 w-full p-5 bg-white h-4/6 z-[1000]">
        <div className="flex flex-row space-between items-center border border-solid border-black rounded-xl w-full mb-2 relative">
          <input
            className="px-3 py-3 uppercase font-GroteskRegular text-2xl focus:border-black focus:ring-0 bg-transparent rounded-xl w-full text-black"
            placeholder="Enter Distance"
            type="number"
          ></input>
          <UnitToggle />
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
          <div>LET’S PACE IT OUT.</div>
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

          <div className="flex flex-row space-between items-center border border-solid borer-white rounded-xl w-full mb-2 relative">
            <input
              className="px-3 py-3 uppercase font-GroteskRegular text-2xl focus:border-white focus:ring-0 bg-transparent rounded-xl w-full"
              placeholder="Finish Time"
            ></input>
            <button className="uppercase text-xl text-white absolute right-[.1em] z-10 px-3 py-3 rounded-lg">
              Set
            </button>
          </div>
        </div>
      </div>
      <div className="px-3 py-6 w-full fixed bottom-0 right-0 left-0">
        <div className="pt-3 border-t border-solid border-white">
          <button className="bg-[#C97900] w-full rounded-lg mt-2 px-3 py-3 uppercase font-GroteskRegular text-3xl bg-black focus:border-white focus:ring-0">
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
