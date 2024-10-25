// src/scripts/useUserInputHandler.js
import { useContext, useEffect } from "react";
import { TypingContext } from "./typingContext";

const useUserInputHandler = (targetInput) => {
  const {
    userInput,
    setUserInput,
    currentParaIndex,
    setCurrentParaIndex,
    setCorrectLetters,
  } = useContext(TypingContext);

  const handleUserInput = (e) => {
    let userInputValue = e.target.value;
    setUserInput(e.target.value);
    console.log(`User input: ${userInput}`);
    console.log(`current userinput length: ${e.target.value.length}`);
    console.log(`current para length: ${targetInput[currentParaIndex].length}`);

    const correct = userInputValue.split("").map((char,index) => {
      return char === targetInput[currentParaIndex].split(" ").join("")[index]
    })
    setCorrectLetters(correct)

    //para index changer
    if (userInputValue.length >= targetInput[currentParaIndex].split(" ").join("").length) {
      e.target.value = "";
      setUserInput(e.target.value);
      setCurrentParaIndex((prev) => {
        if (prev + 1 >= targetInput.length) {
          setCorrectLetters([]);
          return 0;
        }
        setCorrectLetters([]);
        return prev + 1;
      });
    }
  };

  return handleUserInput;
};

export default useUserInputHandler;
