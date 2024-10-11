import React, { useState, useEffect } from "react";
import "../style/timer.css";

function Timer({ finishTime, onTimerEnd }) {
  const [seconds, setSeconds] = useState(finishTime);

  useEffect(() => {
    setSeconds(finishTime);

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(intervalId);
          onTimerEnd();
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [finishTime, onTimerEnd]);

  return (
    <div className="timer">
      <span>{seconds}s</span>
    </div>
  );
}

export default Timer;
