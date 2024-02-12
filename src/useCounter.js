import { useState } from "react";

export const useCounter = (initialValue = 0) => {
    const [ currentValue, setCurrentValue ] = useState(initialValue);

    const increaseCount = () => {
        setCurrentValue((prev) => prev + 1);
    };
    const decreaseCount = () => {
        setCurrentValue((prev) => prev - 1);
    };
    const setZero = () => {
        setCurrentValue(0);
    };
    return {currentValue, increaseCount, decreaseCount, setZero };
}