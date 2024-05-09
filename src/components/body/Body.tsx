import Header from '../header/Header'
import Footer from '../footer/Footer'
import BookContainer from './BookDisplayContainer'
import './Body.css'
import {Book} from "../../domain/Book";

let bookToDisplay:Book = {
    title : "Test Book",
    isbn : 221188993300,
}
export default function mainBody() {
    return <div className="main-content-container">
        <Header/>
        <div className="body-content-container">
            <BookContainer isbn={221188993300} title={"Test Book "}/>
            <BookContainer isbn={221188993300} title={"Test Book "}/>
            <BookContainer isbn={221188993300} title={"Test Book "}/>
            <BookContainer isbn={221188993300} title={"Test Book "}/>
            <BookContainer isbn={221188993300} title={"Test Book "}/>
        </div>
        <Footer/>
    </div>
}