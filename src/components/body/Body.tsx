import './Body.css'
import React, { useEffect, useState } from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import BookContainer from './BookDisplayContainer'
import {Book} from "../../domain/Book";
import {getBooksPerPage} from "../../domain/Api";

let booksToDisplay:Array<Book> = new Array<Book>();

/*
export default function MainBody() {

    return <div className="main-content-container">
        <Header/>
        <div id="body-content-container" className="body-content-container">
            <BookContainer title={"Test Book"} isbn={8465188884} />
            <BookContainer title={"Test Book"} isbn={8465188884} />
            <BookContainer title={"Test Book"} isbn={8465188884} />
            <BookContainer title={"Test Book"} isbn={8465188884} />
            <BookContainer title={"Test Book"} isbn={8465188884} />
        </div>
        <Footer/>
    </div>
}

 */

// Display Books from API:
export default function MainBody() {

    const [booksToDisplay, setBooksToDisplay] = useState<Book[]>([]);

    useEffect(() => {
        getBooks();
    }, []);

    async function getBooks() {
        try {
            const books = await getBooksPerPage(16);
            setBooksToDisplay(books);
        } catch (error) {
            console.error("Fehler beim Abrufen der Bücher:", error);
        }
    }

    function displayBooks() {
        return booksToDisplay.map((book, index) => (
            <BookContainer key={index} cover={book.cover} title={book.title} author={book.author} isbn={book.isbn} price={book.price} />
        ));
    }

    if (booksToDisplay.length != 0 ) {
        return <div className="main-content-container">
            <Header/>
            <div id="body-content-container" className="body-content-container">
                {displayBooks()}
            </div>
            <Footer/>
        </div>
    } else {
        return <div className="main-content-container">
            <Header/>
            <div id="body-content-container" className="body-content-container">
                <h3>There are no Books right now !</h3>
                <h3>try again ..</h3>
            </div>
            <Footer/>
        </div>
    }
}
