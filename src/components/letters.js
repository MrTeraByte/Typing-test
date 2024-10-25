import { useContext } from "react";
import { TypingContext } from "../scripts/typingContext";
import "../style/userInputsArea.css";

export default function Letters({ targetInput, userInputRef }) {
  const { currentParaIndex } = useContext(TypingContext)
  const words = targetInput[currentParaIndex]?.split(" ");
  let globalLetteringIndex = 0;

  console.log(words);
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
            return (
              <div className={`letter-elem`} key={currentLetterIndex}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
