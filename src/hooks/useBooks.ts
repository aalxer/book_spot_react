import {useEffect, useState} from "react";
import {Book} from "../types/Book";
import {getAllBooks} from "../domain/Api";
import {State} from "../types/State"

export const useBooks = () => {

    const [books, setBooks] = useState<Book[]>([]);
    const [state, setState] = useState<State>("initial");
    const [lastRefresh, setLastRefresh] = useState(Date.now());

    const refresh = () => {
        setLastRefresh(Date.now());
        console.log("incrementLastRefresh: " + lastRefresh);
    };

    let error: Error = new Error();

    useEffect(() => {
        getBooks();
    }, [lastRefresh]);

    function getBooks() {

        getAllBooks().then((response) => {
            setState("success");
            setBooks(response);
        }).catch((error) => {
            setState("error");
            console.error("Fehler beim Abrufen der Bücher:", error);
        })
        setState("loading");

        // oder:
        /*
        setState("loading");
        try {
            let result:Book[] = await getAllBooks();
            setState("success");
            setBooks(result);
        } catch (error) {
            setState("error");
            console.error("Fehler beim Abrufen der Bücher:", error);
        }
         */
    }

    return {books, state, error, refresh}
}