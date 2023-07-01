import { useState } from "react";
import * as React from "react";
import { animate } from "framer-motion";
import styles from "styles/styles.module.scss";
import { InputContainer } from "@/components/InputContainer";
import { Keyboard } from "@/components/Keyboard";

export default function Home() {
  const [currentInput, setCurrentInput] = useState("distance");
  const [distance, setDistance] = useState("0.0");
  const [time, setTime] = useState("00:00:00");
  const [pace, setPace] = useState("00:00");
  const allInputValues = [distance, time, pace];
  const allSetInputValues = [setDistance, setTime, setPace];

  return (
    <div className={styles.app}>
      <div className={styles.appHeader} />
      <div className={styles.inputStack}>
        <InputContainer
          label={"distance"}
          value={distance}
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
        />
        <InputContainer
          label={"time"}
          value={time}
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
        />
        <InputContainer
          label={"pace"}
          value={pace}
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
        />
      </div>
      <Keyboard
        currentInput={currentInput}
        allInputValues={allInputValues}
        allSetInputValues={allSetInputValues}
      />
    </div>
  );
}
