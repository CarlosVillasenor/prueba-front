"use client";

import { useState } from "react";
import PinInput from "./pin-input";
import CalculatorButtons from "./calculator-buttons";

export default function Calculator(): React.JSX.Element {
  const [code, setCode] = useState("");

  return (
    <>
      <PinInput
        value={code}
        onChange={setCode}
      />
      <CalculatorButtons />
    </>
  );
}
