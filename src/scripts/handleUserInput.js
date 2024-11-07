// src/scripts/useUserInputHandler.js
import { useContext } from "react";
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
    setIncorrectLetters,
    setGlobalIncLetters,
  } = useContext(TypingContext);

  const handleUserInput = (e) => {
    let userInputValue = e.target.value;

    setUserInput(userInputValue);
    setTotalTyped(
      (prevTotal) => prevTotal + userInputValue.slice(userInput.length)
    );

    const correct = userInputValue.split("").map((char, index) => {
      return char === targetInput[currentParaIndex].split(" ").join("")[index];
    });

    let incorrectCount = correct.filter((isCorrect) => !isCorrect).length;
    setIncorrectLetters(incorrectCount);

    setCorrectLetters(correct);

    //para index changer
    if (
      userInputValue.length >=
      targetInput[currentParaIndex].split(" ").join("").length
    ) {
      setCurrentParaIndex((prev) => {
        if (prev + 1 >= targetInput.length) {
          return 0;
        }
        console.log(totalTyped);
        e.target.value = "";
        setCorrectLetters([]);
        setGlobalIncLetters((prevIncorrects) => {
          return [...prevIncorrects, incorrectCount];
        });
        return prev + 1;
      });
    }
  };

  return handleUserInput;
};

export default useUserInputHandler;
