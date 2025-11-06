"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface CounterUpProps {
  count: number;
  time?: number;
}

export default function CounterUp({
  count,
  time = 3,
}: CounterUpProps): React.ReactElement {
  const [counterOn, setCounterOn] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCounterOn(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <>
      <span ref={elementRef} className="number-counter-wrapper">
        {counterOn ? (
          <CountUp end={count} duration={time} redraw={true}>
            {({ countUpRef }) => (
              <span className="number-counter" ref={countUpRef} />
            )}
          </CountUp>
        ) : (
          <span className="number-counter">0</span>
        )}
      </span>
    </>
  );
}
