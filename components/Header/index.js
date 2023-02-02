import React from "react";
import Symbol from "../Symbol";
import ModeToggle from "../ModeToggle";

const Header = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between border-b border-solid border-white pb-4">
      <Symbol />
      <ModeToggle />
    </div>
  );
};

export default Header;
