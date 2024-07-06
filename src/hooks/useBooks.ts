import {useEffect, useState} from "react";
import {Book} from "../types/Book";
import {getBooksPerPage} from "../domain/Api";
import {State} from "../types/State"

export const useBooks = (currentPage:number) => {

    const [books, setBooks] = useState<Book[]>([]);
    const [state, setState] = useState<State>("initial");
    const [lastRefresh, setLastRefresh] = useState(Date.now());
    const [lastPage, setLastPage] = useState(0);

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
            extractLastPageNumber(response.headers);
            setBooks(response.booksFromBackend);
        }).catch((error) => {
            setState("error");
            console.error("Fehler beim Abrufen der Bücher:", error);
        })
    }

    function extractLastPageNumber(responseHeader:any) {

        const linkHeader = responseHeader.get('Link');

        if (linkHeader) {
            const lastPageLink = linkHeader.split(',').find((link: string | string[]) => link.includes('rel="last"'));
            if (lastPageLink) {
                const match = lastPageLink.match(/_page=(\d+)/);
                if (match && match[1]) {
                    setLastPage(parseInt(match[1]));
                }
            }
        }
        console.log("lastPage: " , lastPage)
    }

    return {books, state, lastPage, error, refresh}
}