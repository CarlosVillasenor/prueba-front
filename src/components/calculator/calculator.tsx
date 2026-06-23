"use client";

import { useState } from "react";
import PinInput from "./pin-input";

export default function Calculator(): React.JSX.Element {
  const [code, setCode] = useState("290034");

  return (
    <PinInput
      value={code}
      onChange={setCode}
    />
  );
}
