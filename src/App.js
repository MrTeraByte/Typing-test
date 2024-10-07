import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Inputs from "./components/Inputs.js";
import Status from "./components/Status.js";

import "./style/app.css";

function App() {
  const [showStatus, setShowStatus] = useState(true);

  return (
    <div className="main-container">
      <KeyboardEventHandler
        handleKeys={["enter"]}
        onKeyEvent={() => setShowStatus(false)}
      />
      {showStatus ? <Status wpm={35} accuracy={80}/> : null}
      <Inputs />
    </div>
  );
}

export default App;
