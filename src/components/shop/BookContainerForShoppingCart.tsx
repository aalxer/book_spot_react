import DefaultCover from '../../assets/images/default-book-cover.png'
import RemoveIcon from '../../assets/icons/remove-icon-red.png'
import '../../styles/BookContainerForShoppingCart.css'
import {Book} from "../../types/Book";
import {NavLink} from "react-router-dom";

const defaultPrice: string = "NaN";
const defaultCoverUrl: string = DefaultCover;

export default function BookContainerForShoppingCart({
                                                         id,
                                                         title,
                                                         isbn,
                                                         price = defaultPrice,
                                                         cover = defaultCoverUrl
                                                     }: Book) {

    return <div className="book-display-content-container-shoppingCart">
        <div className="book-display-cover-cintainer-shoppingCart">
            <img src={cover} alt="book-cover" className="book-cover-shoppingCart"/>
        </div>
        <div className="book-display-info-container-shoppingCart">
            <NavLink to={`/home/${id}`}><h4>{title}</h4></NavLink>
            <p>isbn: {isbn}</p>
            <div className="book-preis-container-shoppingCart">
                <p>{price}</p>
                <p>2</p>
                <img src={RemoveIcon} alt="remove-icon"/>
            </div>
        </div>
    </div>
}