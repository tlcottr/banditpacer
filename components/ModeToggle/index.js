import React, { useContext } from "react";
import { UnitToggleContext } from "components/UnitToggleProvider";
import styles from "./styles.module.scss";

const ModeToggle = () => {
  const { selected, setSelected } = useContext(UnitToggleContext);

  return (
    <div
      className={`flex flex-row items-center justify-between border border-solid border-white text-white text-lg rounded-lg ${styles.unitToggle}`}
    >
      <div
        className={`px-4 py-1 ${
          selected === "PACE" ? styles.selector : styles.slideLeftToRight
        }`}
        onClick={() => setSelected("PACE")}
      >
        PACE
      </div>
      <div
        className={`px-4 py-1 ${
          selected === "TIME" ? styles.selector : styles.slideLeftToRight
        }`}
        onClick={() => setSelected("TIME")}
      >
        TIME
      </div>
    </div>
  );
};

export default ModeToggle;
