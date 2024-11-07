import { useContext, useRef, useEffect } from "react";
import { TypingContext } from "./typingContext";

export default function useShowResult(
  userInputRef,
  setShowStatus,
  setStatusProps,
  targetInput
) {
  const {
    userInput,
    setTotalTyped,
    totalTyped,
    incorrectLetters,
    setIncorrectLetters,
    globalIncLetters,
    setGlobalIncLetters,
  } = useContext(TypingContext);
  const wpmRef = useRef(0);
  const accuracyRef = useRef(0);

  const totalWords = () => {
    let total = 0;
    for (let i = 0; i < targetInput.length; ++i) {
      total += targetInput[i].split("").length;
    }
    return total;
  };

  const getIncorrectCount = () => {
    const globalIncSum = globalIncLetters.reduce(
      (total, currentValue) => total + currentValue,
      0
    );

    return globalIncSum + incorrectLetters;
  };

  useEffect(() => {
    const correctCount = totalTyped.length - getIncorrectCount();
    const wordsPerMinute = Math.round(totalTyped.length / 5)  * (60 / 120);
    const accuracy = Math.round((correctCount / totalTyped.length) * 100);
    wpmRef.current = wordsPerMinute;
    accuracyRef.current = accuracy;
    console.log(`total type ${totalTyped.length}`);
    console.log(`IncCorrect ${correctCount}`);
  }, [totalTyped, targetInput]);

  const showResult = () => {
    setShowStatus(true);
    setStatusProps({
      wpm: wpmRef.current,
      accuracy: accuracyRef.current,
    });
    userInputRef.current.blur();
    userInputRef.current.value = "";
    totalWords();
    setTotalTyped("");
    setIncorrectLetters(0);
    setGlobalIncLetters([]);
  };

  return showResult;
}
