import DefaultCover from '../../images/default-book-cover.png'
import CartIcon from '../../images/cart-icon-gradient.png'
import './BookDisplayContainer.css'
import {Book} from "../../domain/Book";

const defaultAuthor:string = "unknown";
const defaultPrice:number = 12.99;
const defaultCoverUrl:string = DefaultCover;

// To Display:
// Cover , Title, Author , Isbn , Price
export default function bookContainer({
                                          title,
                                          isbn,
                                          author = defaultAuthor,
                                          price = defaultPrice,
                                          cover = defaultCoverUrl
}: Book) {
    return <div className="book-display-content-container">
        <div className="book-display-cover-cintainer">
            <img src={cover} alt="book-cover" className="book-cover"/>
        </div>
        <div className="book-display-info-container">
            <h4>{title}</h4>
            <p>by {author}</p>
            <p>isbn: {isbn}</p>
            <div className="book-preis-container">
                <p>{price}$</p>
                <img src={CartIcon} alt="shopping-cart-icon"/>
            </div>
        </div>
    </div>
}