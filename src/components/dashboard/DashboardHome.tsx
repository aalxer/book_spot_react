import {Book} from "../../domain/Book";
import {useBooks} from "../../domain/useBooks";
import './DashboardHome.css'
import '../App.css'
import DeleteIcon from '../../images/delete-icon-red.png'
import EditIcon from '../../images/edit-icon-yello.png'
import AddIcon from '../../images/add-icon-gray.png'
import LoadingContainer from "../body/LoadingContainer";
import {deleteBookByIsbn} from '../../domain/Api'
import {Link} from "react-router-dom";

const book: Book = {
    id: 786453845,
    abstract: "Protect your Web 2.0 architecture against the latest wave of cybercrime using expert tactics from Internet security professionals. Hacking Exposed Web 2.0 shows how hackers perform reconnaissance, choose their entry point, and attack Web 2.0 - based services, and reveals detailed countermeasures and...",
    author: "Rich Cannings, Himanshu Dwivedi, Zane Lackey",
    cover: "http://localhost:4730/covers/9780071494618.png",
    isbn: 9780071494618,
    numPages: 258,
    price: "$12.03",
    publisher: "McGraw-Hill",
    subtitle: "Web 2.0 Security Secrets and Solutions",
    title: "Hacking Exposed Web 2.0"
}

export default function DashboardHome() {

    const {books, state, error, refresh} = useBooks();

    function displayItems() {

        if (state === "success") {
            {
                generateTableTitle()
            }
            return books.map((book) => generateBookItems(book))
        } else {
            return <LoadingContainer/>
        }
    }

    function generateAddBtn() {
        return <Link className="addBookLink" to={"/add" }>
            <button className="addBookBtn">
                <img src={AddIcon} alt="add-icon"/>
                <p>Add new book</p>
            </button>
        </Link>
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
            <div className="editBtn"><img src={EditIcon} alt="edit-icon"/><p>Edit</p></div>
            <div className="deleteBtn" onClick={() => {
                deleteBook(book.isbn)
            }}><img src={DeleteIcon} alt="delete-icon"/><p>Drop</p></div>
        </div>
    }

    function deleteBook(isbn: number) {
        deleteBookByIsbn(isbn).then(() => {
            displayItems();
            // TODO Show message
        }).catch((error) => {
            // TODO Show message
        })
    }

    return (<div className="dashboardContentContainer">
        {generateAddBtn()}
        {generateTableTitle()}
        {displayItems()}
    </div>)
}