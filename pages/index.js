import { useState } from "react";

export default function Home() {
  const [unit, setUnit] = useState(true);

  const dist = 26.2;
  const time = "03:45:07";
  const pace = "8'35";

  const presetChips = [
    { title: "MILE", MI: "1", KM: "1.61" },
    { title: "5K", MI: "5", KM: "5" },
    { title: "10K", MI: "6.21", KM: "10" },
    { title: "HALF", MI: "13.1", KM: "21.08" },
    { title: "MARATHON", MI: "26.2", KM: "42.16" },
  ];

  const DownArrow = ({ size, color }) => {
    const iconSize = size || 36;
    const iconColor = color || "fill-gray-600";
    return (
      <svg
        viewBox="0 0 29 29"
        xmlns="http://www.w3.org/2000/svg"
        height={`${iconSize}`}
        width={`${iconSize}`}
        fill={iconColor}
        className="focus:fill-[#d07c04]"
      >
        <path d="M20.9977 20.9976C18.7115 23.3191 16.8564 26.0288 15.519 29L12.6504 29C11.3066 26.0305 9.44929 23.3215 7.16387 20.9976C5.24183 19.1504 2.6654 18.1412 9.12344e-05 18.1916L9.1428e-05 13.7632C3.25018 13.7632 5.86279 14.547 7.83793 16.1146C9.83435 17.7328 11.2622 19.9459 11.9136 22.4319L12.0704 22.4319L12.0704 -7.05762e-07L16.1225 -5.28636e-07L16.1225 22.4397L16.3577 22.4397C16.982 19.9556 18.3923 17.7398 20.3785 16.1224C22.3484 14.5549 24.961 13.7711 28.2163 13.7711L28.2163 18.1995C26.8779 18.1671 25.5462 18.3988 24.2974 18.8814C23.0689 19.3627 21.9476 20.0819 20.9977 20.9976V20.9976Z" />
      </svg>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-[2vh] py-[3vh]">
        <div className="w-full border border-solid border-gray-600 focus:border-[#d07c04] focus:text-[#d07c04] p-[1.5vh] rounded-lg grid grid-cols-1 gap-[.5vh]">
          <div className="w-full text-left font-GroteskRegular text-[2vh] tracking-wider">
            DISTANCE
          </div>
          <div className="flex flex-row justify-center items-end">
            <div className="w-full text-left font-GroteskRegular text-[4vh] leading-[4vh] tracking-wider text-white">
              {dist}
            </div>
            <div className="font-GroteskRegular text-[3vh] tracking-wider border border-solid border-gray-600 rounded-md px-1 text-white">
              <div className="flex flex-row justify-between items-center">
                <div onClick={() => setUnit(!unit)} className="mr-1">
                  {unit ? "MI" : "KM"}
                </div>
                <DownArrow size={"2vh"} color={"#ffffff"} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border border-solid border-gray-600 focus:border-[#d07c04] focus:text-[#d07c04] p-[1.5vh] rounded-lg grid grid-cols-1 gap-[.5vh]">
          <div className="w-full text-left font-GroteskRegular text-[2vh] tracking-wider">
            TIME
          </div>
          <div className="flex flex-row justify-center items-end">
            <div className="w-full text-left font-GroteskRegular text-[4vh] leading-[4vh] tracking-wider text-white">
              {time}
            </div>
          </div>
        </div>
        <div className="w-full border border-solid border-gray-600 focus:border-[#d07c04] focus:text-[#d07c04] p-[1.5vh] rounded-lg grid grid-cols-1 gap-[.5vh]">
          <div className="w-full text-left font-GroteskRegular text-[2vh] tracking-wider">
            PACE
          </div>
          <div className="flex flex-row justify-center items-end">
            <div className="w-full text-left font-GroteskRegular text-[4vh] leading-[4vh] tracking-wider text-white">
              {pace}
            </div>
            <div className="font-GroteskRegular text-[3vh] tracking-wider text-white">
              <div className="flex flex-row justify-between items-center">
                {unit ? "/MI" : "/KM"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 bottom-0 top-0 bg-gradient-to-r from-transparent to-black w-1/4 pointer-events-none"></div>
        <div className="overflow-x-auto">
          <div className="flex">
            {presetChips.map((chip, index) => (
              <div
                key={index}
                className="p-[1vh] bg-[#383434] font-GroteskRegular text-[2.5vh] uppercase tracking-wider rounded-md mr-[1vh]"
              >
                {chip.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-[1.5vh]">
        <div className="grid grid-cols-3 gap-[1.5vh] text-center text-[3.5vh]">
          <div className="px-[1vh] py-[.35vh] bg-[#7F7C81] font-GroteskRegular uppercase tracking-wider rounded-md col-span-1">
            C
          </div>
          <div className="px-[1vh] py-[.35vh] bg-[#383434] font-GroteskRegular uppercase tracking-wider rounded-md col-span-1 flex items-center justify-center">
            <DownArrow size={"2.75vh"} color={"#ffffff"} />
          </div>
          <div className="px-[1vh] py-[.35vh] bg-[#383434] font-GroteskRegular uppercase tracking-wider rounded-md col-span-1 flex items-center justify-center">
            <span className="rotate-180">
              <DownArrow size={"2.75vh"} color={"#ffffff"} />
            </span>
          </div>
          <div className="px-[1vh] py-[.35vh] bg-[#333] font-GroteskRegular uppercase tracking-wider rounded-md col-span-1">
            7
          </div>
          <div className="px-[1vh] py-[.35vh] bg-[#333] font-GroteskRegular uppercase tracking-wider rounded-md col-span-1">
            8
          </div>
          <div className="px-[1vh] py-[.35vh] bg-[#333] font-GroteskRegular uppercase tracking-wider rounded-md col-span-1">
            9
          </div>
          <div className="px-[1vh] py-[.35vh] bg-[#333] font-GroteskRegular uppercase tracking-wider rounded-md col-span-1">
            6
          </div>
          <div className="px-[1vh] py-[.35vh] bg-[#333] font-GroteskRegular uppercase tracking-wider rounded-md col-span-1">
            5
          </div>
          <div className="px-[1vh] py-[.35vh] bg-[#333] font-GroteskRegular uppercase tracking-wider rounded-md col-span-1">
            4
          </div>
          <div className="px-[1vh] py-[.35vh] bg-[#333] font-GroteskRegular uppercase tracking-wider rounded-md col-span-1">
            3
          </div>
          <div className="px-[1vh] py-[.35vh] bg-[#333] font-GroteskRegular uppercase tracking-wider rounded-md col-span-1">
            2
          </div>
          <div className="px-[1vh] py-[.35vh] bg-[#333] font-GroteskRegular uppercase tracking-wider rounded-md col-span-1">
            1
          </div>
          <div className="px-[1vh] py-[.35vh] bg-[#333] font-GroteskRegular uppercase tracking-wider rounded-md col-span-2">
            0
          </div>
          <div className="px-[1vh] py-[.35vh] bg-[#333] font-GroteskRegular uppercase tracking-wider rounded-md col-span-1">
            .
          </div>
        </div>
      </div>
    </div>
  );
}
