import React, { createContext, useEffect, useState } from "react";

export const TypingContext = createContext();

export function TypingContextProvider({ children }) {
  const [userInput, setUserInput] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [totalTyped, setTotalTyped] = useState("");
  const [currentParaIndex, setCurrentParaIndex] = useState(0);
  const [incorrectLetters, setIncorrectLetters] = useState(0);

  return (
    <TypingContext.Provider
      value={{
        userInput,
        setUserInput,
        correctLetters,
        setCorrectLetters,
        totalTyped,
        setTotalTyped,
        currentParaIndex,
        setCurrentParaIndex,
        incorrectLetters,
        setIncorrectLetters
      }}
    >
      {children}
    </TypingContext.Provider>
  );
}
