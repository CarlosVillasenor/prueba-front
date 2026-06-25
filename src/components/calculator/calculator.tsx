"use client";

import { useState } from "react";
import PinInput from "./pin-input";
import CalculatorButtons from "./calculator-buttons";
import { actionSaveRemittance } from "../../../lib/actions.js";

export default function Calculator(): React.JSX.Element {
  const [code, setCode] = useState("");

  function handleOnButtonClick(value: string): void {
    // Prevent adding more than 8 characters
    if (code.length >= 8) return;
    
    if (value === ".") {
      // Prevent adding multiple decimal points
      if (!code.includes(".")) {
        setCode(code + value);
      }
    } else {
      setCode(code + value);
    }
  }

  function handleOnDelete(): void {
    setCode(code.slice(0, -1));
  }

  function handleOnEnter(): void {
    console.log("Enter pressed with code:", code);
    // Clear the input after saving
    setCode("");
    actionSaveRemittance(code);
  }

  return (
    <>
      <PinInput
        value={code}
        onChange={setCode}
      />
      <CalculatorButtons
        onButtonClick={handleOnButtonClick}
        onDelete={handleOnDelete}
        onEnter={handleOnEnter}
      />
    </>
  );
}
