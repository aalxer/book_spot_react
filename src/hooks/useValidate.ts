import {useState} from "react";
import {InvalidInputs} from "../types/InvalidInputs";

export const useInputsValidate = () => {

    const [errors, setErrors] = useState({} as InvalidInputs);

    function validate(title:string , isbn:string): boolean {
        if (title.length === 0) {
            setErrors({title: "field must be filled in"})
            return false;
        } else if (isbn.length === 0) {
            setErrors({isbn: "field must be filled in"})
            return false;
        } else {
            return true;
        }
    }

    return {errors, validate}
}