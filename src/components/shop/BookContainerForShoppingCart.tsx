import DefaultCover from '../../assets/images/default-book-cover.png'
import RemoveIcon from '../../assets/icons/remove-icon-red.png'
import '../../styles/BookContainerForShoppingCart.css'
import {NavLink} from "react-router-dom";
import {ShoppingCartState} from "../../types/ShoppingCartState";
import {useDispatch} from "react-redux";
import {removeItemFromShoppingCart} from "../../features/shoppingCart/ShoppingCartSlice";

const defaultPrice: string = "$0.00";
const defaultCoverUrl: string = DefaultCover;

export default function BookContainerForShoppingCart({
                                                         book, count
                                                     }: ShoppingCartState) {

    const dispatch = useDispatch();

    function handleRemoveItem() {
        dispatch(removeItemFromShoppingCart(book.id!))
    }

    return <div className="book-display-content-container-shoppingCart">
        <div className="book-display-cover-cintainer-shoppingCart">
            <img src={book.cover && book.cover.length > 0 ? book.cover : DefaultCover} alt="book-cover" className="book-cover-shoppingCart"/>
        </div>
        <div className="book-display-info-container-shoppingCart">
            <NavLink to={`/home/${book.id}`}><h4>{book.title}</h4></NavLink>
            <p>by {book.author}</p>
            <div className="book-preis-container-title-shoppingCart">
                <p>Price</p>
                <p>Pieces</p>
            </div>
            <div className="book-preis-container-shoppingCart">
                <p>{book.price}</p>
                <p>{count}</p>
            </div>
        </div>
        <div className="book-remove-icon-container">
            <img onClick={handleRemoveItem} src={RemoveIcon} alt="remove-icon"/>
        </div>
    </div>
}