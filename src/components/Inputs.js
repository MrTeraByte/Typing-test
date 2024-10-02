import { React, useRef } from "react";
import handleInput from "../scripts/handleInputs";
import "../style/inputs.css";

//have to fetch from other source
export let targetInput =
"Nikola Tesla, a famous inventor, and electrical engineer born in 1856. He made numerous groundbreaking contributions to the design of the modern alternating current (AC) electricity supply system.";

export default function Inputs() {
  const invInput = useRef();
  const words = targetInput.split(" ");

  return (
    <div className="target-text-container" onClick={() => {
      invInput.current.focus();
    }}>
      {words.map((word) => {
        return (
          <div className="word-elem">
            {word.split("").map((letter,index) => {
              // console.log(letter);
              return <div className="letter-elem" key={index}>{letter}</div>;
            })}
          </div>
        );
      })}
      <input className="invi-input" ref={invInput} onInput={(e) => handleInput(e)}></input>
    </div>
  );
}
