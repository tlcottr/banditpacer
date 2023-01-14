import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col m-5 w-full">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
