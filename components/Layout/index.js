import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="px-5 pt-[2vh] md:max-w-lg md:m-auto">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
