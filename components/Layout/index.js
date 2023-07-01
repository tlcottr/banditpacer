import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-rows 1fr px-5 md:max-w-lg md:m-auto">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
