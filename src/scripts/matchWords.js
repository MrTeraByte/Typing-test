import { targetInput } from "../components/UserInputArea";

export let wrongLetter = 0;
let typedLetters = 0;

export default function matchWords(e) {
  let userInputs = e.target.value.split("");
  let target = targetInput[0]

  if (!(target[userInputs.length - 1] === userInputs[userInputs.length - 1])) {
    wrongLetter++
  }

  typedLetters++
  
  console.log(
    `Last user input: ${userInputs[userInputs.length - 1]}, Index: ${
      userInputs.length - 1
    }\nTarget input was: ${
      target[userInputs.length - 1]
    }, Index: ${target.indexOf(
      target[userInputs.length - 1]
    )}\nMatched: ${
      target[userInputs.length - 1] === userInputs[userInputs.length - 1]
    }\nWrong letter: ${wrongLetter}`
  );
}
