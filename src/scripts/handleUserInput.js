// src/scripts/useUserInputHandler.js
import { useContext } from "react";
import { TypingContext } from "./typingContext";

const useUserInputHandler = () => {
    const context = useContext(TypingContext);

    if (!context) {
        throw new Error("useUserInputHandler must be used within a TypingContextProvider");
    }

    const handleUserInput = (e) => {
        const inputValue = e.target.value;
        console.log(inputValue);
        // Implement your logic to update the current paragraph index
        // Example: setCurrentParaIndex(someIndex);
    };

    return handleUserInput;
};

export default useUserInputHandler;
