import { useContext, useRef, useEffect } from "react";
import { TypingContext } from "./typingContext";

export default function useShowResult(
  userInputRef,
  setShowStatus,
  setStatusProps,
  targetInput,
) {
  const { userInput, setTotalTyped, totalTyped, incorrectLetters,setIncorrectLetters } =
    useContext(TypingContext);
  const wpmRef = useRef(0);
  const accuracyRef = useRef(0);

  const totalWords = () => {
    let total = 0;
    for (let i = 0; i < targetInput.length; ++i) {
      total += targetInput[i].split("").length;
    }
    return total;
  };

  useEffect(() => {
    const wordsPerMinute = Math.ceil((totalTyped.length / 5) / 2);
    const accuracy = Math.round(((totalTyped.length - incorrectLetters) / totalTyped.length) * 100)
    wpmRef.current = wordsPerMinute;
    accuracyRef.current = accuracy;
    // console.log("incorrect letters " + incorrectLetters);
    // console.log("wpm " + wpmRef.current);
    // console.log("accuracy " + accuracy);
  }, [totalTyped, targetInput]);

  const showResult = () => {
    setShowStatus(true);
    setStatusProps({
      wpm: wpmRef.current,
      accuracy: accuracyRef.current,
    });
    // console.log("wpm " + wpmRef.current);
    userInputRef.current.blur();
    userInputRef.current.value = "";
    totalWords();
    setTotalTyped("");
    setIncorrectLetters(0)
  };

  return showResult;
}
