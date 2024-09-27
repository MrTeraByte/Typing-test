import {React , useState , useRef } from "react";
import "../style/inputs.css";

export default function Inputs() {
  const targetInput = "hello world"
  const [Result, setResult] = useState("");
  let userInput = useRef("");

  const checkWords = () => {
    let userInputValue = userInput.current.value;

    //check the last typed letter
    if (
      userInputValue[userInputValue.length - 1] ===
      targetInput[userInputValue.length - 1]
    ) {
      userInput.current.style.border = "1px solid green";
      console.log(true);
      setResult(Result.concat("\ntrue"));
    } else {
      userInput.current.style.border = "1px solid red";
      console.log(false);
      setResult(Result.concat("\nfalse"));
    }
  };

  return (
    <div className="inputs-div-container">
      <div className="inputs-div">
        <input
          type="text"
          placeholder={targetInput}
          className="inputs"
          disabled  
        ></input>
        <input
          ref={userInput}
          type="text"
          className="inputs"
          onInput={checkWords}
        ></input>
        <textarea
          value={Result}
          className=""
        ></textarea>
      </div>
    </div>
  );
}
