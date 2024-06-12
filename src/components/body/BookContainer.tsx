import DefaultCover from '../../images/default-book-cover.png'
import CartIcon from '../../images/cart-icon-gradient.png'
import LikeCounter from './LikeCounterContainer'
import './BookContainer.css'
import {Book} from "../../domain/Book";
import {NavLink} from "react-router-dom";

const defaultAuthor: string = "unknown";
const defaultPrice: string = "NaN";
const defaultCoverUrl: string = DefaultCover;

// To Display:
// Cover , Title, Author , Isbn , Price
export default function BookContainer({
                                          id,
                                          title,
                                          isbn,
                                          author = defaultAuthor,
                                          price = defaultPrice,
                                          cover = defaultCoverUrl
                                      }: Book) {

    return <div className="book-display-content-container">
        <div className="book-display-cover-cintainer">
            <LikeCounter></LikeCounter>
            <img src={cover} alt="book-cover" className="book-cover"/>
        </div>
        <div className="book-display-info-container">
            <NavLink to={`/home/${id}`}><h4>{title}</h4></NavLink>
            <p>by {author}</p>
            <p>isbn: {isbn}</p>
            <div className="book-preis-container">
                <p>{price}</p>
                <img src={CartIcon} alt="shopping-cart-icon"/>
            </div>
        </div>
    </div>
}