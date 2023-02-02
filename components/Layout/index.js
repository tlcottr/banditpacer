import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="p-5">
      <Header />
      <main className="flex flex-col justify-between">{children}</main>
    </div>
  );
};

export default Layout;
