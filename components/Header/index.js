import React from "react";
import Symbol from "../Symbol";
import Paces from "../Paces";

const Header = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between">
      <Symbol />
      <Paces />
    </div>
  );
};

export default Header;
