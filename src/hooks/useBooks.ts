import {useEffect, useState} from "react";
import {Book} from "../types/Book";
import {getAllBooks, getBooksPerPage} from "../domain/Api";
import {State} from "../types/State"

export const useBooks = () => {

    const [books, setBooks] = useState<Book[]>([]);
    const [state, setState] = useState<State>("initial");
    const [lastRefresh, setLastRefresh] = useState(Date.now());
    const [currentPage, setCurrentPage] = useState(1);

    const refresh = () => {
        setLastRefresh(Date.now());
        console.log("incrementLastRefresh: " + lastRefresh);
    };

    let error: Error = new Error();

    useEffect(() => {
        getBooks();
    }, [lastRefresh, currentPage]);

    function getBooks() {
        setState("loading");
        getBooksPerPage(currentPage).then((response) => {
            setState("success");
            setBooks(response);
        }).catch((error) => {
            setState("error");
            console.error("Fehler beim Abrufen der Bücher:", error);
        })
    }

    return {books, state, error, refresh, currentPage, setCurrentPage}
}