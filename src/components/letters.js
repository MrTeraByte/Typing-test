import { useContext } from "react";
import { TypingContext } from "../scripts/typingContext";
import "../style/letters.css";

export default function Letters({ targetInput, userInputRef }) {
  const { currentParaIndex, correctLetters } = useContext(TypingContext);
  const words = targetInput[currentParaIndex]?.split(" ");
  let globalLetteringIndex = 0;
  let inputLength = userInputRef.current.value?.length;

  // console.log(words);
  return (
    <div
      className="target-text-container"
      onClick={() => {
        userInputRef.current.focus();
      }}
    >
      {words?.map((word, wordIndex) => (
        <div className={`word-elem`} key={wordIndex}>
          {word.split("").map((letter) => {
            const currentLetterIndex = globalLetteringIndex++;
            const isCorrect = correctLetters[currentLetterIndex];
            const isCurrent = currentLetterIndex === inputLength; // Highlight the current letter.
            return (
              <div
                className={`letter-elem ${
                  isCorrect === true
                    ? "correct"
                    : isCorrect === false
                    ? "wrong"
                    : ""
                } ${isCurrent ? "current-letter" : ""} `}
                key={currentLetterIndex}
              >
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
