import './Homepage.css'
import React, {useEffect} from 'react';
import BooksContainer from '../components/body/BookContainer'
import {useBooks} from "../domain/useBooks";
import RefreshIcon from '../images/refresh-icon-pink.png'
import FilterIcon from '../images/filter-icon-pink.png'
import LoadingContainer from "../components/body/LoadingContainer";

export default function MainBody() {

    const {books, state, error, refresh} = useBooks();

    // useEffect in default: sie wird nur beim ersten rendern aufgerufen
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
                <BooksContainer key={book.id} id={book.id} cover={book.cover} title={book.title} author={book.author}
                                isbn={book.isbn}
                                price={book.price}/>)

        } else if (state === "loading") {

            return <LoadingContainer/>
        } else {

            return <div className="stateContainer">
                <p className={"stateText"}>{state}</p>
            </div>
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

    function displayRefreshAndFilterIcons() {
        if (state === "success") {
            return <div className="refreshAndFilterContainer">
                <img onClick={refresh} src={RefreshIcon} alt="refresh-icon"/>
                <img src={FilterIcon} alt="filter-icon"/>
            </div>
        }
    }

    return <div id="homepage-body-content-container" className="homepage-body-content-container">
        {displayRefreshAndFilterIcons()}
        {generateBooksContainers()}
    </div>
}