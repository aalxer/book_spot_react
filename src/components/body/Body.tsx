import './Body.css'
import React, {useEffect, useState} from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import BookContainer from './BookDisplayContainer'
import NextPrevContainer from './NextAndPrevPageContainer'
import {Book} from "../../domain/Book";
import {getBooksPerPage} from "../../domain/Api";

export default function MainBody() {

    /**
     * Set a States und Effect using React-Hooks
     */
    const [booksToDisplay, setBooksToDisplay] = useState<Book[]>([]);
    const [currentPage, setPage] = useState(1);
    const [isLastPage, setIsLastPage] = useState(false);

    useEffect(() => {
        getBooks();
    }, [currentPage]);

    /**
     * Request Books from API
     */
    async function getBooks() {
        try {
            const books = await getBooksPerPage(currentPage);
            if (books.length > 1) {
                setBooksToDisplay(books);
                setIsLastPage(false);
            } else {
                setIsLastPage(true);
            }
        } catch (error) {
            console.error("Fehler beim Abrufen der Bücher:", error);
        }
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
            <NextPrevContainer currentPage={currentPage} isLastPage={isLastPage} nextFunction={nextPage} prevFunction={prevPage}/>
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

    function generateBooksContainers() {
        prepareBooksToDisplay()

        return booksToDisplay.map((book) =>
            <BookContainer key={book.id} cover={book.cover} title={book.title} author={book.author} isbn={book.isbn}
                           price={book.price} />
        );
    }

    function prepareBooksToDisplay() {

        for (const book of booksToDisplay) {
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

    function nextPage() {
        if (!isLastPage) {
            setPage(currentPage + 1);
        }
    }

    function prevPage() {
        if (currentPage > 1) {
            setPage(currentPage - 1);
        }
    }
}