import React, { useState, createContext } from "react";

export const ModeToggleContext = createContext();

const ModeToggleProvider = ({ children }) => {
  const [selected, setSelected] = useState("PACE");

  return (
    <ModeToggleContext.Provider value={{ selected, setSelected }}>
      {children}
    </ModeToggleContext.Provider>
  );
};

export default ModeToggleProvider;
