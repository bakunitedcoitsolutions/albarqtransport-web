import type React from "react";
import CounterUp from "./CounterUp";

interface CounterNumberProps {
  count: number;
}

export default function CounterNumber({
  count,
}: CounterNumberProps): React.ReactElement {
  return (
    <>
      <CounterUp count={count} time={3} />
    </>
  );
}
