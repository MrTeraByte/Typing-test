import React, { useState, useEffect } from 'react';

function Timer({ onTimerEnd }) {
  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds - 1);

      if (seconds === 0) {
        clearInterval(intervalId);
        onTimerEnd();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, onTimerEnd]);

  return (
    <div>
      <h1>Seconds Remaining: {seconds}</h1>
    </div>
  );
}

export default Timer;