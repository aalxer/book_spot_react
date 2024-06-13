import '../../styles/UpdateBookContainer.css'
import {useNavigate, useParams} from "react-router-dom";
import {useGetbook} from "../../hooks/useGetbook";
import BackButton from "../body/BackButton";
import LoadingContainer from "../body/LoadingContainer";
import {useEffect, useState} from "react";

export default function UpdateBookContainer() {

    const {bookId} = useParams();
    const {state, book} = useGetbook(bookId);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [subtitle, setSubTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isbn, setIsbn] = useState("");
    const [publisher, setPublisher] = useState("");
    const [price, setPrice] = useState("");
    const [pages, setPages] = useState("");
    const [abstract, setAbstract] = useState("");

    useEffect(() => {
        if (state === "success") {
            setTitle(book.title);
            setSubTitle(book.subtitle as string);
            setAuthor(book.author as string);
            //setIsbn(book.isbn);
            setPublisher(book.publisher as string);
            setPrice(book.price as string);
            //setPages(parseInt(book.numPages as string));
            setAbstract(book.abstract as string);
        }
    }, [state]);

    function saveUpdate() {

    }

    function displayBookInfo() {
        return <div className="updateBookMainContainer">
            <BackButton/>
            <form onSubmit={(event) => {
                event.preventDefault();
                // TODO
                // validieren
                // Book-Obj erstellen
                // an Backend senden
                // Response erfolgreich umleiten -> BookDetails
                // sonst Fehler anzeigen
            }}>
                <div className="updateBookContentContainer">
                    <p>Book Info</p>

                    <label className="twoColumns">Title</label>
                    <input className="twoColumns" type="text" value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}/>
                    <label className="twoColumns">Subtitle</label>
                    <input className="twoColumns" type="text" value={subtitle}
                           onChange={(event) => {
                               setSubTitle(event.target.value);
                           }}
                    />
                    <label className="twoColumns">Author</label>
                    <input className="twoColumns" type="text" value={author}
                           onChange={(event) => {
                               setAuthor(event.target.value);
                           }}
                    />

                    <label>Isbn</label>
                    <label>Publisher</label>
                    <input type="number" value={isbn}
                           onChange={(event) => {
                               setIsbn(event.target.value);
                           }}
                    />
                    <input type="text" value={publisher}
                           onChange={(event) => {
                               setPublisher(event.target.value);
                           }}
                    />
                    <label>Price</label>
                    <label>Pages</label>
                    <input type="text" defaultValue={price}
                           onChange={(event) => {
                               setPrice(event.target.value);
                           }}
                    />
                    <input type="number" value={pages}
                           onChange={(event) => {
                               setPages(event.target.value);
                           }}
                    />

                    <label className="twoColumns">Abstract</label>
                    <textarea value={abstract} className="abstractText twoColumns"
                              onChange={(event) => {
                                  setAbstract(event.target.value);
                              }}
                    />

                    <button type="submit" className="saveBtn">Save</button>
                    <button className="cancelBtn">Cancel</button>
                </div>
            </form>
        </div>
    }

    return (<>
        {state === "success" ? displayBookInfo()
            : state === "error" ? navigate("/error")
                : <LoadingContainer/>}
    </>)
}