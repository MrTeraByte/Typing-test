import React, { Component, useEffect, useRef, useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

// Components
import Status from "./components/Status.js";
import Timer from "./components/Timer.js";
import Letters from "./components/letters.js";

// scripts
import { TypingContextProvider } from "./scripts/typingContext.js";
import getText from "./scripts/getTexts.js";
import useUserInputHandler from "./scripts/handleUserInput.js";

// style
import "./style/app.css";

function App() {
  const [showStatus, setShowStatus] = useState(true);
  const [statusProps, setStatusProps] = useState({});
  const [targetInput, setTargetInput] = useState("");
  const userInputRef = useRef();
  const handleUserInput = useUserInputHandler();

  useEffect(() => {
    setTargetInput(() => {
      return getText();
    });
  }, []);

  function showResult() {
    userInputRef.current.blur();
    userInputRef.current.value = "";
    setShowStatus(true);
    setStatusProps({
      wpm: 45,
      accuracy: 80,
    });
    return 0;
  }

  return (
    <TypingContextProvider>
      <div className="main-container">
        {showStatus && <Status {...statusProps} />}
        {!showStatus && <Timer finishTime={6} onTimerEnd={showResult} />}
        {/* <UserInputArea ref={userInputRef} /> */}
        <Letters targetInput={targetInput} userInputRef={userInputRef} />
        <KeyboardEventHandler
          handleKeys={["backspace"]}
          onKeyEvent={(key, e) => {
            e.preventDefault();
            // Handle backspace logic here
          }}
        >
          <input
            className="invi-input"
            ref={userInputRef}
            onInput={handleUserInput}
          />
        </KeyboardEventHandler>
        <KeyboardEventHandler
          handleKeys={["enter"]}
          onKeyEvent={() => {
            setTargetInput(() => {
              return getText();
            });
            setShowStatus(false);
            userInputRef.current.focus();
            console.info(`enter pressed`);
          }}
        />
      </div>
    </TypingContextProvider>
  );
}

export default App;
