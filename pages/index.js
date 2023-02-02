import Prompt from "@/components/Prompt";

export default function Home() {
  return (
    <>
      <div className="h-full">
        <div className="py-4 font-GroteskMedium text-6xl">
          <div>LET’S PACE IT OUT.</div>
        </div>
        <div className="">
          <input
            className="border border-solid borer-white rounded-xl w-full mb-2 px-3 py-4 uppercase font-GroteskRegular text-4xl bg-black focus:border-white focus:ring-0"
            placeholder="Distance"
          ></input>
          <input
            className="border border-solid borer-white rounded-xl w-full mt-2 px-3 py-4 uppercase font-GroteskRegular text-4xl bg-black focus:border-white focus:ring-0"
            placeholder="Finish Time"
          ></input>
        </div>
      </div>
      <div className="px-3 py-6 w-full fixed bottom-0 right-0 left-0">
        <div className="pt-3 border-t border-solid border-white">
          <button className="bg-[#C97900] w-full rounded-lg mt-2 px-3 py-3 uppercase font-GroteskRegular text-4xl bg-black focus:border-white focus:ring-0">
            <span className="opacity-50">Pace Me</span>
          </button>
        </div>
      </div>
    </>
  );
}
