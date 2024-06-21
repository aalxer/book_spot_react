import {Book} from "../types/Book";
import {useBooks} from "../hooks/useBooks";
import '../styles/DashboardHome.css'
import '../styles/App.css'
import DeleteIcon from '../assets/icons/delete-icon-red.png'
import EditIcon from '../assets/icons/edit-icon-yello.png'
import LoadingContainer from "../components/body/LoadingContainer";
import AddButton from "../components/dashboard/AddButton"
import {useDelete} from "../hooks/dashboardServices";
import {NavLink} from "react-router-dom";
import NextAndPrevPageContainer from "../components/body/NextAndPrevPageContainer";
import {useState} from "react";

export default function Dashboard() {

    const [currentPage, setCurrentPage] = useState(1);
    const {books, state, refresh} = useBooks(currentPage);
    const {deleteState, deleteBook} = useDelete();

    function displayItems() {

        return books.map((book) => generateBookItems(book))
    }

    function generateTableTitle() {
        return <div className={"dashboardTitleContainer dashboardBooksTable"}>
            <p>id</p>
            <p>isbn</p>
            <p>title</p>
            <p>subtitle</p>
            <p>author</p>
            <p>publisher</p>
            <p>price</p>
            <p>pages</p>
        </div>
    }

    function generateBookItems(book: Book) {

        return <div key={book.id} className="dashboardBooksTable dashboardBookItemContainer">
            <p>{book.id}</p>
            <p>{book.isbn}</p>
            <p>{book.title}</p>
            <p className="bookTitle">{book.subtitle}</p>
            <p className="bookTitle">{book.author}</p>
            <p>{book.publisher}</p>
            <p>{book.price}</p>
            <p>{book.numPages}</p>
            <NavLink to={`${book.id}`}>
                <div className="editBtn"><img src={EditIcon} alt="edit-icon"/><p>Edit</p></div>
            </NavLink>
            <div className="deleteBtn" onClick={() => {
                deleteBook(book.id!)
                deleteState === "error" ? alert("something went wrong") : refresh()
            }}><img src={DeleteIcon} alt="delete-icon"/><p>Drop</p></div>
        </div>
    }

    function nextPage() {
        setCurrentPage(currentPage + 1);
    }

    function prevPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function goToPage(pageNumber:number) {
        setCurrentPage(pageNumber);
    }
    
    return (
        state === "success" ?
            <div className="dashboardContentContainer">
                <AddButton/>
                {generateTableTitle()}
                {displayItems()}
                <div className="nextPrevContainer">
                    <NextAndPrevPageContainer currentPage={currentPage} isLastPage={false} numberOfPageToDisplay={10}
                                              nextFunction={nextPage} prevFunction={prevPage} goToPage={goToPage}/>
                </div>
            </div>
            : <LoadingContainer/>
    )
}