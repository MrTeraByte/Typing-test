import React, { useRef, useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import UserInputArea from "./components/UserInputArea.js";
import Status from "./components/Status.js";
import Timer from "./components/Timer.js";

import "./style/app.css";
//logich
function App() {
  const [showStatus, setShowStatus] = useState(true);
  const [startTimer, setStartTimer] = useState(false);
  const [statusProps, setStatusProps] = useState({});
  const userInputRef = useRef();

  return (
    <div className="main-container">
      <KeyboardEventHandler
        handleKeys={["enter"]}
        onKeyEvent={() => {
          setShowStatus(false);
          setStartTimer(true);
          userInputRef.current.focus()
          console.info(`Timer started!`)
        }}
      />
      {showStatus && <Status {...statusProps} />}
      {startTimer && (
        <Timer
          finishTime={120}
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
      <UserInputArea ref={userInputRef}/>
    </div>
  );
}

export default App;
