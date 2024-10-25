import React, { useContext, useEffect, useRef, useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

// Components
import Status from "./components/Status.js";
import Timer from "./components/Timer.js";
import Letters from "./components/letters.js";

// scripts
import getText from "./scripts/getTexts.js";
import useUserInputHandler from "./scripts/handleUserInput.js";
import { TypingContext } from "./scripts/typingContext";

// style
import "./style/app.css";

function App() {
  const [showStatus, setShowStatus] = useState(true);
  const [statusProps, setStatusProps] = useState({});
  const [targetInput, setTargetInput] = useState("");
  const { userInput, setUserInput, setCurrentParaIndex} = useContext(TypingContext);
  const userInputRef = useRef(userInput);
  const handleUserInput = useUserInputHandler(targetInput);

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
    <div className="main-container">
      {showStatus && <Status {...statusProps} />}
      {!showStatus && <Timer finishTime={10} onTimerEnd={showResult} />}
      {/* <UserInputArea ref={userInputRef} /> */}
      <Letters targetInput={targetInput} userInputRef={userInputRef} />
      <KeyboardEventHandler
        handleKeys={["backspace","space"]}
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
          setCurrentParaIndex(0)
          setShowStatus(false);
          userInputRef.current.focus();
          setUserInput("");
          console.info(`enter pressed`);
        }}
      />
    </div>
  );
}

export default App;
