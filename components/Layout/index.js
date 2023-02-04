import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="p-5">
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
