"use client";

import classes from "./pin-input.module.css";

type PinInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function PinInput({ value, onChange}: PinInputProps) {
  return (
    <div className={classes.container}>
      <input
        type="text"
        value={value}
        maxLength={6}
        onChange={(e) => onChange(e.target.value)}
        className={classes.input}
      />
    </div>
  );
}
