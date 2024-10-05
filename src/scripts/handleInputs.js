import { targetInput } from "../components/Inputs";

export default function handleInput(e) {
  let userInputs = e.target.value.split("");

  console.log(
    `Last user input: ${userInputs[userInputs.length - 1]}, Index: ${
      userInputs.length - 1
    }\nTarget input was: ${
      targetInput[userInputs.length - 1]
    }, Index: ${targetInput.indexOf(
      targetInput[userInputs.length - 1]
    )}\nMatched: ${
      targetInput[userInputs.length - 1] === userInputs[userInputs.length - 1]
    }`
  );
}
