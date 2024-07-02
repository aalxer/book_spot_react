import BackButton from "../shared/BackButton";
import "../../styles/ShoppingCart.css"
import {useBooks} from "../../hooks/useBooks";
import BookContainerForShoppingCart from "./BookContainerForShoppingCart";

export default function ShoppingCart() {

    const {books, state, error, refresh} = useBooks(1);

    return <div className="shoppingCartMainContainer">
        <BackButton/>
        <div className="shoppingCartContentContainer">
            <div className="booksContainer">
                {books.map((book) => (
                    <BookContainerForShoppingCart id={book.id} title={book.title} isbn={book.isbn} price={book.price}
                                                  cover={book.cover}/>
                ))}
            </div>
            <div className="infoContainer">
                <p>Items: <span className="infoValue">15</span></p>
                <p>Total: <span className="infoValue">519$</span></p>
                <button className="checkoutBtn">Checkout</button>
            </div>
        </div>
    </div>
}