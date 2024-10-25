import React, { createContext, useState } from "react";

export const TypingContext = createContext();

export function TypingContextProvider({ children }) {
  const [userInput, setUserInput] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [totalTyped, setTotalTyped] = useState(0);
  const [incorrectTyped, setIncorrectTyped] = useState(0);
  const [currentParaIndex, setCurrentParaIndex] = useState(0);

  return (
    <TypingContext.Provider
      value={{
        userInput,
        setUserInput,
        correctLetters,
        setCorrectLetters,
        totalTyped,
        setTotalTyped,
        incorrectTyped,
        setIncorrectTyped,
        currentParaIndex,
        setCurrentParaIndex,
      }}
    >
      {children}
    </TypingContext.Provider>
  );
}
