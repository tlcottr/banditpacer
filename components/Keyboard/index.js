import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Keyboard(props) {
  const numKeys = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];

  return (
    <motion.div className="keyboard">
      <ClearKey
        value={"C"}
        currentInput={props.currentInput}
        setDistance={props.allSetInputValues[0]}
        setTime={props.allSetInputValues[1]}
        setPace={props.allSetInputValues[2]}
      />
      <ArrowKey value={`↓`} />
      <ArrowKey value={`↑`} />
      {numKeys.map((num) => (
        <NumKey
          key={num}
          value={num}
          currentInput={props.currentInput}
          distance={props.allInputValues[0]}
          time={props.allInputValues[1]}
          pace={props.allInputValues[2]}
          setDistance={props.allSetInputValues[0]}
          setTime={props.allSetInputValues[1]}
          setPace={props.allSetInputValues[2]}
        />
      ))}
    </motion.div>
  );
}

/* Local Components */

function NumKey(props) {
  function determineInputToUpdate() {
    if (props.currentInput === "distance") {
      updateDistance();
    } else if (props.currentInput === "time") {
      updateTime();
    } else {
      updatePace();
    }
  }

  function updateDistance() {
    if (props.distance === "0.0") {
      props.setDistance(props.value);
    } else {
      props.setDistance(props.distance + "" + props.value);
    }
  }

  function updateTime() {
    if (props.time === "00:00:00") {
      props.setTime(props.value);
    } else {
      props.setTime(props.time + "" + props.value);
    }
    props.setPace(parseInt(props.time, 10) / parseInt(props.distance, 10));
  }

  function updatePace() {
    if (props.pace === "00:00") {
      props.setPace(props.value);
    } else {
      props.setPace(props.pace + "" + props.value);
    }
  }

  return (
    <motion.div className="key num" onTap={determineInputToUpdate}>
      {props.value}
    </motion.div>
  );
}

function ClearKey(props) {
  function clear() {
    if (props.currentInput === "distance") {
      props.setDistance("0.0");
    } else if (props.currentInput === "time") {
      props.setTime("00:00:00");
    } else {
      props.setPace("00:00");
    }
  }

  return (
    <motion.div className="key clear" onTap={clear}>
      {props.value}
    </motion.div>
  );
}

function ArrowKey(props) {
  return <motion.div className="key arrow">{props.value}</motion.div>;
}
