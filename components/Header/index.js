import React from "react";
import Symbol from "../Symbol";
import UnitToggle from "../UnitToggle";

const Header = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between border-b border-solid border-white pb-4">
      <Symbol />
      <UnitToggle />
    </div>
  );
};

export default Header;
