import { useRef, useState } from "react";
import "./style.css";

function App() {
  const targetInput = "hello world";
  const [Result,setResult] = useState("");
  let userInput = useRef("");

  const checkWords = () => {
    let userInputValue = userInput.current.value;

    //check the last typed letter
    if (
      userInputValue[userInputValue.length - 1] ==
      targetInput[userInputValue.length - 1]
    ) {
      console.log(true);
      setResult(Result.concat("\ntrue"));
    } else {
      console.log(false);
      setResult(Result.concat("\nfalse"));
    }
  };

  return (
    <div className="App">
      <div className="inputs border-2 border-black rounded-md flex flex-col justify-center items-center p-5 m-5">
        <input
          type="text"
          placeholder={targetInput}
          disabled
          className="border-2 border-gray-500 mt-2 w-2/4"
        ></input>
        <input
          ref={userInput}
          type="text"
          placeholder="user text"
          className="border-2 border-gray-500 mt-2 w-2/4"
          onInput={checkWords}
        ></input>
        <textarea
          value={Result}
          className="border-2 border-black mt-4"
        ></textarea>
      </div>
    </div>
  );
}

export default App;
