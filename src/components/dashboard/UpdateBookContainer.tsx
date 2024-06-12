import {Book} from "../../domain/Book";
import {getBook} from "../../domain/Api";
import './UpdateBookContainer.css'
import {useState} from "react";

export default function UpdateBookContainer() {

    const [book, setBook] = useState<Book>({} as Book)

    function saveUpdate() {

    }

    function displayBookInfo() {
        return <div className="updateBookMainContainer">
            <div className="updateBookContentContainer">
                <p>Book Info</p>

                <label className="twoColumns">Title</label>
                <input className="twoColumns" type="text" defaultValue={book.title}/>
                <label className="twoColumns">Subtitle</label>
                <input className="twoColumns" type="text" defaultValue={book.subtitle}/>
                <label className="twoColumns">Author</label>
                <input className="twoColumns" type="text" defaultValue={book.author}/>

                <label>Isbn</label>
                <label>Publisher</label>
                <input type="number" defaultValue={book.isbn}/>
                <input type="text" defaultValue={book.publisher}/>
                <label>Price</label>
                <label>Pages</label>
                <input type="text" defaultValue={book.price}/>
                <input type="number" defaultValue={book.numPages}/>

                <label className="twoColumns">Abstract</label>
                <textarea defaultValue={book.abstract} className="abstractText twoColumns"/>

                <button onClick={() => saveUpdate()} className="saveBtn">Save</button>
                <button className="cancelBtn">Cancel</button>
            </div>
        </div>
    }

    function getBookInfo(isbn: number) {
        getBook(isbn).then((result) => setBook(result)).catch((error) =>
            console.error())
    }

    getBookInfo(9781787125421);

    return displayBookInfo();
}