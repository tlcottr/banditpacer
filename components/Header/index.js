import React from "react";
import Symbol from "../Symbol";
import ThemeChanger from "../ThemeChanger";

const Header = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between">
      <Symbol />
      <ThemeChanger />
    </div>
  );
};

export default Header;
