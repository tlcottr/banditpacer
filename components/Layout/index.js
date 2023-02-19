import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="p-5 fixed inset-0 md:max-w-lg md:m-auto">
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
