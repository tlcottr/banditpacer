import React, { useState, createContext } from "react";

export const UnitToggleContext = createContext();

const UnitToggleProvider = ({ children }) => {
  const [unit, setUnit] = useState("MI");

  return (
    <UnitToggleContext.Provider value={{ unit, setUnit }}>
      {children}
    </UnitToggleContext.Provider>
  );
};

export default UnitToggleProvider;
