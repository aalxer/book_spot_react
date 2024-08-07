import '../../styles/AddNewBook.css'
import BackButton from "../../components/shared/BackButton";
import {FormEvent, useEffect, useState} from "react";
import {useInputsValidate} from "../../hooks/useValidate";
import {useNavigate} from "react-router-dom";
import {Book} from "../../types/Book";
import {useAdd} from "../../hooks/dashboardServices";

export default function AddNewBook() {

    const {errorsMap, validate} = useInputsValidate();
    const navigate = useNavigate();
    const {addState, addNewBook} = useAdd();

    const [title, setTitle] = useState("");
    const [subtitle, setSubTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isbn, setIsbn] = useState("");
    const [publisher, setPublisher] = useState("");
    const [price, setPrice] = useState("");
    const [pages, setPages] = useState("");
    const [abstract, setAbstract] = useState("");
    const [cover, setCover] = useState("");

    useEffect(() => {
        if (addState === "success") {
            navigate("/home/" + isbn);
        }
        if (addState === "error") {
            navigate("/error");
        }
    }, [addState])

    function displayAddForm() {
        return <div className="addBookMainContainer">
            <BackButton/>
            <form onSubmit={(event) => handleAddEvent(event)}
                  onReset={() => navigate(-1)}>

                <div className="addBookContentContainer">
                    <p>main Info</p>
                    <input className={`${errorsMap.has("title") ? "fieldNotFilled" : ""}`} type="text" placeholder="Title"
                           onChange={(event) => {
                               setTitle(event.target.value);
                           }}/>
                    <input className={`${errorsMap.has("isbn") ? "fieldNotFilled" : ""}`} type="number" placeholder="Isbn"
                           onChange={(event) => {
                               setIsbn(event.target.value);
                           }}/>
                    <p className="inputValidationText">{errorsMap.get("title")}</p>
                    <p className="inputValidationText">{errorsMap.get("isbn")}</p>

                    <p>additional Info</p>
                    <input type="text" placeholder="Subtitle"
                           onChange={(event) => {
                               setSubTitle(event.target.value);
                           }}/>
                    <input type="text" placeholder="Author"
                           onChange={(event) => {
                               setAuthor(event.target.value);
                           }}/>
                    <input type="text" placeholder="Publisher"
                           onChange={(event) => {
                               setPublisher(event.target.value);
                           }}/>
                    <input type="number" placeholder="Price"
                           onChange={(event) => {
                               setPrice(event.target.value);
                           }}/>
                    <input type="number" placeholder="Pages"
                           onChange={(event) => {
                               setPages(event.target.value);
                           }}/>
                    <input type="text" placeholder="Cover"
                           onChange={(event) => {
                               setCover(event.target.value);
                           }}/>
                    <p>abstract about the Book</p>
                    <textarea placeholder="Drop something about the book here .." className="abstractText"
                              onChange={(event) => {
                                  setAbstract(event.target.value);
                              }}/>

                    <button type={"submit"} className="saveBtn">Save</button>
                    <button type={"reset"} className="cancelBtn">Cancel</button>
                </div>
            </form>
        </div>
    }

    function handleAddEvent(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let inputsMap:Map<string,string> = new Map<string, string>();
        inputsMap.set("title", title);
        inputsMap.set("isbn", isbn);

        if (validate(inputsMap)) {
            let book: Book = {
                title: title,
                subtitle: subtitle,
                isbn: isbn,
                author: author,
                publisher: publisher,
                price: price.length > 0 ? price : "$0.00",
                numPages: parseInt(pages),
                abstract: abstract,
                id: parseInt(isbn),
                cover: cover
            }
            addNewBook(book);
            // in useEffect wird auf den UpdateState reagiert und dementsprechend was gemacht
        }
    }

    return displayAddForm();
}