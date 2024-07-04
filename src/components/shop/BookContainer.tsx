import DefaultCover from '../../assets/images/default-book-cover.png'
import CartIcon from '../../assets/icons/cart-icon-gradient.png'
import LikeCounter from './LikeCounterContainer'
import '../../styles/BookContainer.css'
import {Book} from "../../types/Book";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUserFromState} from "../../app/store";
import {addItemsToShoppingCart} from "../../features/shoppingCart/ShoppingCartSlice"
import {useGetbook} from "../../hooks/useGetbook";

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

    const user = useSelector(selectUserFromState);
    const dispatch = useDispatch();
    const {state, book} = useGetbook(id);

    function handleAddBookToShoppingCart() {
        dispatch(addItemsToShoppingCart(book));
    }

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
                {user ? <img onClick={handleAddBookToShoppingCart} src={CartIcon} alt="shopping-cart-icon"/> : ""}
            </div>
        </div>
    </div>
}