import {useState} from "react";

export const useCounter = (initialValue: number) => {
    const [counter, setCounter] = useState(initialValue);
    const increment = () => setCounter(counter + 1);
    return {counter, increment}
}