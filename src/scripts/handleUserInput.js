// src/scripts/useUserInputHandler.js
import { useContext, useEffect } from "react";
import { TypingContext } from "./typingContext";

const useUserInputHandler = (targetInput) => {
  const {
    userInput,
    setUserInput,
    totalTyped,
    setTotalTyped,
    currentParaIndex,
    setCurrentParaIndex,
    setCorrectLetters,
    incorrectLetters,
    setIncorrectLetters,
  } = useContext(TypingContext);

  const handleUserInput = (e) => {
    let userInputValue = e.target.value;

    setUserInput(userInputValue);
    setTotalTyped(
      (prevTotal) => prevTotal + userInputValue.slice(userInput.length)
    );

    console.log(
      `User input: ${userInputValue}\nCurrent user input length: ${e.target.value.length}\nCurrent paragraph length: ${targetInput[currentParaIndex].length}\nTotal input: ${totalTyped}\nTotal input length: ${totalTyped.length}\nIncorrect letters: ${incorrectLetters}`
    );

    const correct = userInputValue.split("").map((char, index) => {
      return char === targetInput[currentParaIndex].split(" ").join("")[index];
    });

    let incorrectCount = correct.filter((isCorrect) => !isCorrect).length;
    setIncorrectLetters((prevIncorrect) => prevIncorrect + incorrectCount);
 
    setCorrectLetters(correct);

    //para index changer
    if (
      userInputValue.length >=
      targetInput[currentParaIndex].split(" ").join("").length
    ) {
      setCurrentParaIndex((prev) => {
        if (prev + 1 >= targetInput.length) {
          setCorrectLetters([]);
          setIncorrectLetters(0);
          return 0;
        }
        console.log(totalTyped);
        e.target.value = "";
        setCorrectLetters([]);
        return prev + 1;
      });
    }
  };

  return handleUserInput;
};

export default useUserInputHandler;
