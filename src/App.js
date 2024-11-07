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
import useShowResult from "./scripts/results.js";

function App() {
  const [showStatus, setShowStatus] = useState(true);
  const [statusProps, setStatusProps] = useState({});
  const [targetInput, setTargetInput] = useState("");
  const { userInput, setUserInput, setCurrentParaIndex } =
    useContext(TypingContext);
  const userInputRef = useRef(userInput);
  const handleUserInput = useUserInputHandler(targetInput);
  const showResult = useShowResult(
    userInputRef,
    setShowStatus,
    setStatusProps,
    targetInput
  );

  useEffect(() => {
    setTargetInput(() => {
      return getText();
    });
  }, []);

  return (
    <div className="main-container">
      {showStatus && <Status {...statusProps} />}
      {!showStatus && <Timer finishTime={120} onTimerEnd={showResult} />}
      <Letters
        key={targetInput}
        targetInput={targetInput}
        userInputRef={userInputRef}
      />
      <KeyboardEventHandler
        handleKeys={["backspace", "space"]}
        onKeyEvent={(key, e) => {
          e.preventDefault();
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
          setCurrentParaIndex(0);
          setShowStatus(false);
          userInputRef.current.focus();
          setUserInput("");
        }}
      />
    </div>
  );
}

export default App;
