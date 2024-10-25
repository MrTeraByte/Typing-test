import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import getText from "../scripts/getTexts";

import "../style/userInputsArea.css";

let targetInput = [
  "Nikola Tesla, a famous inventor, and electrical engineer born in 1856. He made numerous groundbreaking contributions to the design of the modern alternating current (AC) electricity supply system.",
  "Electricity is a fundamental form of energy resulting from the movement of charged particles. It powers our homes, fuels industries, and drives technology, making it essential for modern life and innovation.",
  "Nikola Tesla's innovations in radio technology paved the way for wireless communication. His experiments with electromagnetic waves led to the development of radio transmission, revolutionizing global communication.",
];

const UserInputArea = forwardRef(({}, ref) => {
  const [wordsIndex, setWordIndex] = useState(0);
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
  const invInput = useRef();
  const words = targetInput[wordsIndex].split(" ");

  //global counter for letter indexing,helps for cursur
  let globalLetteringIndex = 0;

  //changes the outputing sentence on complete
  const wordsIndexHandler = (e) => {
    let userInputs = e.target.value.split("");
    setCurrentInputIndex(userInputs.length);
    console.log("current index" + currentInputIndex);

    if (userInputs.length === targetInput[wordsIndex].length) {
      setWordIndex((prev) => {
        if (prev + 1 >= targetInput.length) {
          return 0;
        }
        return prev + 1;
      });
      e.target.value = "";
      setCurrentInputIndex(0);
    }
  };

  //passing input ref to parent component
  useImperativeHandle(ref, () => ({
    focus: () => {
      if (invInput.current) {
        invInput.current.focus();
      }
    },
  }));

  return (
    <div
      className="target-text-container"
      onClick={() => {
        invInput.current.focus();
      }}
    >
      {/* wraping every word in an elem than every letter in elem inside word elem with a lettering index*/}
      {words.map((word, wordIndex) => (
        <div className={`word-elem`} key={wordIndex}>
          {word.split("").map((letter) => {
            const currentLetterIndex = globalLetteringIndex++;
            // const isCorrect = invInput.current?.value === targetInput[0][currentInputIndex]
            // console.log(targetInput[0][currentInputIndex - 1])

            return (
              <div
                className={`letter-elem ${
                  currentLetterIndex == currentInputIndex
                    ? "current-letter"
                    : ""
                }`}
                key={currentLetterIndex}
              >
                {letter}
              </div>
            );
          })}
        </div>
      ))}
      {/* preventing backspace in input */}
      <KeyboardEventHandler
        handleKeys={["backspace"]}
        onKeyEvent={(key, e) => {
          e.preventDefault();
          // Handle backspace logic here
        }}
      >
        <input
          className="invi-input"
          ref={invInput}
          onInput={(e) => wordsIndexHandler(e)}
          // onInput={(e) => matchWords(e)}
        />
      </KeyboardEventHandler>
    </div>
  );
});

export default UserInputArea;
