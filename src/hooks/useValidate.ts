import {useState} from "react";

export const useInputsValidate = () => {

    const [errorsMap, setError] = useState<Map<string, string>>(new Map())

    function validate(inputsMap: Map<string, string>): boolean {

        let isValid = true;
        let newErrorsMap = new Map<string, string>();

        inputsMap.forEach((value, key) => {
            if (value.length === 0) {
                console.log("validate: " + value + " " + key);
                newErrorsMap.set(key, "field must be filled in")
                isValid = false;
            }
        })

        // weil nur mit dem Aufrufen der set() mit einem neuen Zustand werden Änderungen getriggert
        setError(newErrorsMap);
        return isValid;
    }

    return {errorsMap, validate}
}