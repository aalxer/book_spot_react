import '../styles/Homepage.css'
import React, {useEffect} from 'react';
import BooksContainer from '../components/body/BookContainer'
import {useBooks} from "../hooks/useBooks";
import RefreshIcon from '../assets/icons/refresh-icon-pink.png'
import FilterIcon from '../assets/icons/filter-icon-pink.png'
import LoadingContainer from "../components/body/LoadingContainer";
import NextAndPrevPageContainer from "../components/body/NextAndPrevPageContainer";
import {useNavigate, useParams} from "react-router-dom";

export default function MainBody() {

    const navigate = useNavigate();
    const {books, state, error, refresh, currentPage, setCurrentPage} = useBooks();

    const {page} = useParams();
    console.log(`pageNumber Parameter: ${page}` )

    // useEffect in default: sie wird nur beim ersten rendern aufgerufen
    useEffect(() => {

        const intervalId = setInterval(refresh, 60000);
        // clean function:
        return function () {
            clearInterval(intervalId);
        }
    });

    useEffect(() => {
        if(page) {
            setCurrentPage(parseInt(page));
        }
    }, [page]);

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

    function nextPage() {
        const nextPage = currentPage +1;
        setCurrentPage(nextPage);
        navigate(`/home/page/${nextPage}`);
    }

    function prevPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return <div id="homepage-body-content-container" className="homepage-body-content-container">
        {displayRefreshAndFilterIcons()}
        {generateBooksContainers()}
        <NextAndPrevPageContainer currentPage={currentPage} isLastPage={false} numberOfPageToDisplay={5}
                                  nextFunction={nextPage} prevFunction={prevPage}/>
    </div>
}