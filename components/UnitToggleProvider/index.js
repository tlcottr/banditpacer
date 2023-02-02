import React, { useState, createContext } from "react";

export const UnitToggleContext = createContext();

const UnitToggleProvider = ({ children }) => {
  const [selected, setSelected] = useState("MI");

  return (
    <UnitToggleContext.Provider value={{ selected, setSelected }}>
      {children}
    </UnitToggleContext.Provider>
  );
};

export default UnitToggleProvider;
