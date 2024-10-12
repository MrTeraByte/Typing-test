import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import matchWords from "../scripts/matchWords";

import "../style/inputs.css";

export let targetInput = [
  "Nikola Tesla, a famous inventor, and electrical engineer born in 1856. He made numerous groundbreaking contributions to the design of the modern alternating current (AC) electricity supply system.",
  "Electricity is a fundamental form of energy resulting from the movement of charged particles. It powers our homes, fuels industries, and drives technology, making it essential for modern life and innovation.",
  "Nikola Tesla's innovations in radio technology paved the way for wireless communication. His experiments with electromagnetic waves led to the development of radio transmission, revolutionizing global communication.",
];

const UserInputArea = forwardRef(({}, ref) => {
  const [wordsIndex, setWordIndex] = useState(0);
  const invInput = useRef();
  const words = targetInput[wordsIndex].split(" ");

  //changes the outputing sentence on complete
  const wordsIndexHandler = (e) => {
    let userInputs = e.target.value.split("");

    if (userInputs.length === targetInput[wordsIndex].length) {
      setWordIndex((prev) => {
        if (prev + 1 >= targetInput.length) {
          return 0;
        }
        return prev + 1;
      });
      e.target.value = "";
    }
  };

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
      {words.map((word, wordIndex) => (
        <div className="word-elem" key={wordIndex}>
          {word.split("").map((letter, letterIndex) => (
            <div className="letter-elem" key={letterIndex}>
              {letter}
            </div>
            );
          })}
        </div>
      ))}
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
