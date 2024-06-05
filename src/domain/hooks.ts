import {useEffect, useState} from "react";
import {Book} from "./Book";
import {getAllBooks} from "./Api";

type state = "initial" | "loading" | "success" | "error";

export const useBooks = () => {

    // bis jetzt hat keinen nützlichen Effekt, weil auf die Books wird erst zugegriffen, wenn state "success" ist
    const [books, setBooks] = useState<Book[]>([]);
    const [state, setState] = useState<state>("initial");
    const [lastRefresh, setLastRefresh] = useState(Date.now());

    const refresh = () => {
        setLastRefresh(Date.now());
        console.log("incrementLastRefresh: " + lastRefresh);
    };

    let error: Error = new Error();

    useEffect(() => {
        getBooks();
    }, [lastRefresh]);

    async function getBooks() {
        setState("loading");
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