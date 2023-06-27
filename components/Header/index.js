import React from "react";
import Symbol from "../Symbol";
import ModeToggle from "../ModeToggle";

const Header = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between border-b border-solid border-white pb-[2vh]">
      <Symbol />
    </div>
  );
};

export default Header;
