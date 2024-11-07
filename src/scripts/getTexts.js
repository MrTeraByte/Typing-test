import { generate } from "random-words";

export default function getText() {
  try {
    const textArray = Array.from({ length: 10 }, () =>
      generate({ exactly: 2, maxLength: 3, join: " " })
    );
    return textArray;
  } catch (error) {
    console.error("Couldn't generate words. Please reload the page.", error);
    return [];
  }
}
