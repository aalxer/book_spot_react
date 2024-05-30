import {useEffect, useState} from "react";
import {Book} from "./Book";
import {getAllBooks} from "./Api";

type state = "initial" | "loading .." | "success" | "error";

export const useBooks = () => {

    // bis jetzt hat keinen nützlichen Effekt, weil auf die Books wird erst zugegriffen, wenn state "success" ist
    const [books, setBooks] = useState<Book[]>([]);
    const [state, setState] = useState<state>("initial");
    const refresh = () => getBooks();
    let error: Error = new Error();

    // bis jetzt hat keinen nützlichen Effekt, weil die Books werden nur beim ersten Rendern abgefragt, es gibt
    // keine weiteren Interaktionen in der Seite.
    useEffect(() => {
        getBooks();
    }, []);

    async function getBooks() {
        setState("loading ..");
        getAllBooks().then((response) => {
            setState("success");
            setBooks(response);
        }).catch((error) => {
            setState("error");
            console.error("Fehler beim Abrufen der Bücher:", error);
        })
    }

    return {books, state, error, refresh}
}