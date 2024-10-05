import React, { useState } from "react";
import Inputs from "./components/Inputs.js";
import Status from "./components/Status.js";

import "./style/app.css";

function App() {
  const [showStatus, setShowStatus] = useState(true);

  return (
    <div className="main-container">
      {showStatus && <Status />}
      <Inputs />
    </div>
  );
}

export default App;
