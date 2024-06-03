import './HomePageBody.css'
import React, {useEffect} from 'react';
import BooksList from './BooksListContainer'
import {useBooks} from "../../domain/hooks";

export default function MainBody() {

    const {books, state, error, refresh} = useBooks();

    useEffect(() => {

        const intervalId = setInterval(refresh, 60000);
        // clean function:
        return function () {
            clearInterval(intervalId);
        }
    });

    function generateBooksContainers() {
        if (state === "success") {
            prepareBooksToDisplay();

            return books.map((book) =>
                <BooksList key={book.id} cover={book.cover} title={book.title} author={book.author} isbn={book.isbn}
                           price={book.price}/>)
        } else {
            return <p className={"stateText"}>{state}</p>
        }
    }

    function prepareBooksToDisplay() {

        for (const book of books) {
            if (book.price === "$0.00" || book.price?.length === 0) {
                delete book.price;
            }
            if (book.author?.length === 0) {
                delete book.author;
            }
            if (book.cover?.length === 0) {
                delete book.cover;
            }
        }
    }

    return <div id="homepage-body-content-container" className="homepage-body-content-container">
        {generateBooksContainers()}
    </div>
}