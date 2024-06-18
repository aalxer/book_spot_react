import '../../styles/UpdateBookContainer.css'
import {useNavigate, useParams} from "react-router-dom";
import {useGetbook} from "../../hooks/useGetbook";
import BackButton from "../body/BackButton";
import LoadingContainer from "../body/LoadingContainer";
import {FormEvent, useEffect, useState} from "react";
import {Book} from "../../types/Book";
import {useUpdate} from "../../hooks/dashboardServices";

interface InvalidInputs {
    title?:string,
    isbn?:string
}

export default function UpdateBookContainer() {

    const {bookId} = useParams();
    const {state, book} = useGetbook(bookId);
    const {updateState, updateBook} = useUpdate();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({} as InvalidInputs);

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
            setIsbn(book.isbn);
            setPublisher(book.publisher as string);
            setPrice(book.price as string);
            setPages(book.numPages as unknown as string);
            setAbstract(book.abstract as string);
        }
    }, [state]);

    useEffect(() => {
        if(updateState === "success") {
            navigate("/home/" + bookId);
        } if(updateState === "error") {
            navigate("/error");
        }
    }, [updateState]);

    function displayBookInfo() {
        return <div className="updateBookMainContainer">
            <BackButton/>
            <form onSubmit={(event) => handleUpdate(event)}
                  onReset={() => navigate(-1)}>

                <div className="updateBookContentContainer">
                    <p>Book Info</p>

                    <label className="twoColumns">Title</label>
                    <input className={`twoColumns ${errors.title ? "fieldNotFilled" : ""}`} type="text" value={title}
                           onChange={(event) => {
                               setTitle(event.target.value);
                           }}/>
                    <p className="twoColumns inputValidationText">{errors.title}</p>
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
                    <input type="number" value={isbn} className={`${errors.isbn ? "fieldNotFilled" : ""}`}
                           onChange={(event) => {
                               setIsbn(event.target.value);
                           }}
                    />
                    <input type="text" value={publisher}
                           onChange={(event) => {
                               setPublisher(event.target.value);
                           }}
                    />
                    <p className="twoColumns inputValidationText">{errors.isbn}</p>
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
                    <button type="reset" className="cancelBtn">Cancel</button>
                </div>
            </form>
        </div>
    }

    function handleUpdate(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (validate()) {
            let updatedBook = createUpdatedBook();
            updateBook(parseInt(bookId as string), updatedBook);
        }
    }

    function validate(): boolean {
        if (title.length === 0) {
            setErrors({title: "field must be filled in"})
            return false;
        } else if (isbn.length === 0){
            setErrors({isbn: "field must be filled in"})
            return false;
        } else {
            return true;
        }
    }

    function createUpdatedBook(): Book {

        return {
            title: title,
            subtitle: subtitle,
            isbn: isbn,
            author: author,
            publisher: publisher,
            price: price,
            numPages: parseInt(pages),
            abstract: abstract,
            // not from User-Inputs:
            id: book.id,
            cover: book.cover
        };
    }

    return (<>
        {state === "success" ? displayBookInfo()
            : state === "error" ? navigate("/error")
                : <LoadingContainer/>}
    </>)
}