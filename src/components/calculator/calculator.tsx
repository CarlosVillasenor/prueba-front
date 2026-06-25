"use client";

import { useState } from "react";
import PinInput from "./pin-input";
import CalculatorButtons from "./calculator-buttons";
import { actionSaveRemittance } from "../../../lib/actions.js";
import classes from "./calculator.module.css";

export default function Calculator(): React.JSX.Element {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

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

  async function handleOnEnter(): Promise<void> {
    console.log("Enter pressed with code:", code);
    // Clear the input after saving
    setCode("");
    
    const result = await actionSaveRemittance(code);

    if (result.error) {
      setError(result.error);
    }
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
      <div className={classes["calculator-pin-error"]}>
        {error && <p>* {error} *</p>}
      </div>
    </>
  );
}
