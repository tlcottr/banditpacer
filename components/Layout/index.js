import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col p-5 overflow-hidden">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
