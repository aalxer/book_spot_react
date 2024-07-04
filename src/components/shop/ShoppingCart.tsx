import BackButton from "../shared/BackButton";
import "../../styles/ShoppingCart.css"
import BookContainerForShoppingCart from "./BookContainerForShoppingCart";
import EmptyBox from "../../assets/icons/empty-box-gray.png"
import LoadingContainer from "../shared/LoadingContainer";
import {useCustomerBooks} from "../../hooks/useCustomerBooks";
import {useEffect} from "react";

export default function ShoppingCart() {

    const {state, customerBooks, itemsNumber, totalPrice} = useCustomerBooks();

    function getShoppingCartContent() {
        return <>
            <div className="booksContainer">
                {customerBooks.map((item) => (
                    <BookContainerForShoppingCart key={item.book.id} book={item.book} count={item.count}/>
                ))}
            </div>
            <div className="infoContainer">
                <p>Items <span className="infoValue">{itemsNumber}</span></p>
                <p>Total <span className="infoValue">{totalPrice.toFixed(2)}$</span></p>
                <button className="checkoutBtn">Checkout</button>
            </div>
        </>
    }

    function getEmptyBody() {
        return <div className="emptyBodyContent">
            <img src={EmptyBox} alt="empty-box-icon"/>
            <p>Oops, you haven't added any books yet !</p>
        </div>
    }

    return <div className="shoppingCartMainContainer">
        <BackButton/>
        <div className="shoppingCartContentContainer">
            {
                state === "success" ? getShoppingCartContent()
                    : state === "empty" ? getEmptyBody()
                        : <LoadingContainer/>
            }
        </div>
    </div>
}