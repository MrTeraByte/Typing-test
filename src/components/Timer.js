import React, { useState, useEffect } from "react";
import "../style/timer.css";

export default function Timer({ finishTime, onTimerEnd }) {
  const [seconds, setSeconds] = useState(finishTime);

  // Start the timer
  useEffect(() => {
    setSeconds(finishTime);
  }, [finishTime]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(intervalId);
          onTimerEnd(); // Call the end function when time is up
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []); // Run this effect only once

  return (
    <div className="timer">
      <span>{seconds}s</span>
    </div>
  );
}
