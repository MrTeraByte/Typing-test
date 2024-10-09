import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Inputs from "./components/Inputs.js";
import Status from "./components/Status.js";

import "./style/app.css";
import Timer from "./components/Timer.js";

function App() {
  const [showStatus, setShowStatus] = useState(true);
  const [startTimer, setStartTimer] = useState(false);
  const [statusProps, setStatusProps] = useState({});

  return (
    <div className="main-container">
      <KeyboardEventHandler
        handleKeys={["enter"]}
        onKeyEvent={() => {
          setShowStatus(false);
          setStartTimer(true);
        }}
      />
      {showStatus && <Status {...statusProps} />}
      {startTimer && (
        <Timer
          finishTime={3}
          onTimerEnd={() => {
            setStatusProps({
              wpm: 45,
              accuracy: 80,
            });
            setShowStatus(true);
            setStartTimer(false);
          }}
        />
      )}
      <Inputs />
    </div>
  );
}

export default App;
