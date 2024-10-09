import React, { useState, useEffect } from "react";

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
      console.log("a sec passed");
    }, 1000);

    return () => clearInterval(intervalId);
  }, [finishTime, onTimerEnd]);

  return (
    <div>
      <h1>{seconds}s</h1>
    </div>
  );
}

export default Timer;
