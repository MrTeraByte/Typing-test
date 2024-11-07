import React, { createContext, useState } from "react";

export const TypingContext = createContext();

export function TypingContextProvider({ children }) {
  const [userInput, setUserInput] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [totalTyped, setTotalTyped] = useState("");
  const [currentParaIndex, setCurrentParaIndex] = useState(0);
  const [incorrectLetters, setIncorrectLetters] = useState(0);
  const [globalIncLetters, setGlobalIncLetters] = useState([]);
  
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
        setIncorrectLetters,
        globalIncLetters,
        setGlobalIncLetters,
      }}
    >
      {children}
    </TypingContext.Provider>
  );
}
