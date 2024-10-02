import { targetInput } from "../components/Inputs";

export default function handleInput(e) {
  let userInputs = e.target.value.split("");
  console.log("last user input " + userInputs[userInputs.length - 1]);
  console.log("index of last user input " + (userInputs.length - 1));
  console.log(
    "target input was " +
      targetInput[userInputs.length - 1] +
      "index " +
      targetInput.indexOf(targetInput[userInputs.length - 1])
  );
  console.log(
    "matched " +
      (targetInput[userInputs.length - 1] === userInputs[userInputs.length - 1])
  );
}
