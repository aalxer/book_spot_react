import {getBookPerIsbn} from "../domain/Api"
import {useEffect, useState} from "react";
import {State} from "../types/State";
import {Book} from "../types/Book";
import {useNavigate} from "react-router-dom";

export const useGetbook = (bookId: any) => {

    const [state, setState] = useState<State>("initial");
    const [book, setBook] = useState<Book>({} as Book)

    useEffect(() => {
        getBook(parseInt(bookId as string))
    }, []) // Leeres Abhängigkeitsarray stellt sicher, dass dieser Effekt nur einmalig ausgeführt wird

    function getBook(isbn:number) {
        setState("loading")
        getBookPerIsbn(isbn).then((book) => {
            setState("success")
            setBook(book);
        }).catch((error) => {
            setState("error")
        })
    }

    return {state, book}
}