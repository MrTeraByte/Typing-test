import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//scripts
import { TypingContextProvider } from "./scripts/typingContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TypingContextProvider>
    <App />
  </TypingContextProvider>
);
