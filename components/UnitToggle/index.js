import React, { useContext } from "react";
import { UnitToggleContext } from "@/components/UnitToggleProvider";
import styles from "./styles.module.scss";

const UnitToggle = () => {
  const { selected, setSelected } = useContext(UnitToggleContext);

  return (
    <div className="right-8 fixed">
      <div
        className={`flex flex-row items-center justify-between border border-solid border-black text-white text-lg rounded-lg ${styles.unitToggle}`}
      >
        <div
          className={`px-3 py-1 text-black ${
            selected === "MI" ? styles.selector : styles.slideLeftToRight
          }`}
          onClick={() => setSelected("MI")}
        >
          MI
        </div>
        <div
          className={`px-3 py-1 text-black ${
            selected === "KM" ? styles.selector : styles.slideLeftToRight
          }`}
          onClick={() => setSelected("KM")}
        >
          KM
        </div>
      </div>
    </div>
  );
};

export default UnitToggle;
