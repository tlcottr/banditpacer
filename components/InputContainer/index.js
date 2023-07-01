import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export function InputContainer(props) {
  const isActive = props.currentInput === props.label ? true : false;

  function makeInputActive() {
    props.setCurrentInput(props.label);
  }

  const containerVariants = {
    active: { border: "1px solid var(--color-yellow-2)" },
  };

  const labelVariants = {
    active: { color: "var(--color-yellow-2)" },
  };

  return (
    <motion.div
      className="input-container"
      variants={containerVariants}
      animate={isActive ? "active" : "default"}
      onTap={makeInputActive}
    >
      <motion.div className="input-label" variants={labelVariants}>
        {props.label}
      </motion.div>
      <motion.div className="input-value">{props.value}</motion.div>
    </motion.div>
  );
}
