import '../../styles/Homepage.css'
import React, {useEffect, useState} from 'react';
import BooksContainer from '../../components/shop/BookContainer'
import {useBooks} from "../../hooks/useBooks";
import RefreshIcon from '../../assets/icons/refresh-icon-pink.png'
import FilterIcon from '../../assets/icons/filter-icon-pink.png'
import LoadingContainer from "../../components/shared/LoadingContainer";
import NextAndPrevPageContainer from "../../components/shared/NextAndPrevPageContainer";
import {useNavigate, useParams} from "react-router-dom";

export default function Homepage() {

    const {page} = useParams();
    const initialPage = page ? parseInt(page) : 1;
    const [currentPage, setCurrentPage] = useState(initialPage);
    const {books, state, lastPage, error, refresh} = useBooks(currentPage);
    const navigate = useNavigate();

    // Refresh jeder Minute (useEffect in default: sie wird nur beim ersten rendern aufgerufen):
    useEffect(() => {

        const intervalId = setInterval(refresh, 60000);
        // clean function:
        return function () {
            clearInterval(intervalId);
        }
    });

    /*
    useEffect(() => {
        if(books.length === 0) {
            setLastPage(true);
            prevPage();
        }
    }, [books])

     */

    function displayContent() {
        return <div id="homepage-body-content-container" className="homepage-body-content-container">
            {displayRefreshAndFilterIcons()}
            {generateBooksContainers()}
            <div className="nextAndPrevPageContainer">
                <NextAndPrevPageContainer currentPage={currentPage} lastPage={lastPage} numberOfPageToDisplay={5}
                                          nextFunction={nextPage} prevFunction={prevPage} goToPage={goToPage}
                                          goToFirstPage={goToFirstPage} gotToLastPage={goToLastPage}/>
            </div>
        </div>
    }

    function generateBooksContainers() {
        prepareBooksToDisplay();

        return books.map((book) =>
            <BooksContainer key={book.id} id={book.id} cover={book.cover} title={book.title}
                            author={book.author}
                            isbn={book.isbn}
                            price={book.price}/>)
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

        if (currentPage < lastPage) {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            navigate(`/home/page/${nextPage}`);
        }
    }

    function prevPage() {
        if (currentPage > 1) {
            //setLastPage(false);
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            navigate(`/home/page/${prevPage}`);
        }
    }

    function goToLastPage() {
        if (currentPage < lastPage) {
            setCurrentPage(lastPage);
            navigate(`/home/page/${lastPage}`);
        }
    }

    function goToFirstPage() {
        if (currentPage > 1) {
            setCurrentPage(1);
            navigate(`/home/page/${1}`);
        }
    }

    function goToPage(pageNumber: number) {
        setCurrentPage(pageNumber);
        navigate(`/home/page/${pageNumber}`);
    }

    return state === "success" ? displayContent()
        : state === "loading" ? <LoadingContainer/>
            : <div className="stateContainer">
                <p className={"stateText"}>{state}</p>
            </div>
}