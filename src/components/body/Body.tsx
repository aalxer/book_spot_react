import './Body.css'
import React, {useEffect, useState} from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import BookContainer from './BookDisplayContainer'
import {Book} from "../../domain/Book";
import {getBooksPerPage} from "../../domain/Api";

export default function MainBody() {

    /**
     * Request Books from API
     */
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

    /**
     * Create an Element for each Book from the List
     */
    function generateBooksContainers() {
        return booksToDisplay.map((book) => (
            <BookContainer key={book.id} cover={book.cover} title={book.title} author={book.author} isbn={book.isbn}
                           price={book.price}/>
        ));
    }

    /**
     * Display Content
     */
    if (booksToDisplay.length !== 0) {
        return <div className="main-content-container">
            <Header/>
            <div id="body-content-container" className="body-content-container">
                {generateBooksContainers()}
            </div>
            <Footer/>
        </div>
    } else {
        return <div className="main-content-container">
            <Header/>
            <div id="body-content-container" className="body-content-container">
                <h3>There are no Books right now !</h3>
            </div>
            <Footer/>
        </div>
    }
}