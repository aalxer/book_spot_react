import {useDispatch, useSelector} from "react-redux";
import {selectItemsNumberFromState, selectProduktsFromState, selectUserFromState} from "../../app/store";
import "../../styles/Checkout.css"
import {useEffect, useState} from "react";
import {State} from "../../types/State";
import {clearShoppingCart} from "../../features/shoppingCart/ShoppingCartSlice";
import DoneIcon from "../../assets/icons/done-icon-green.png"
import PrevIcon from "../../assets/icons/prev-icon-thin.png"
import {OrderDetails} from "../../types/OrderDetails";
import {useNavigate} from "react-router-dom";

export default function Checkout() {

    const [state, setState] = useState<State>("loading");
    const user = useSelector(selectUserFromState);
    const shoppingCart = useSelector(selectProduktsFromState);
    const itemsNumber = useSelector(selectItemsNumberFromState);
    const dispatch = useDispatch();
    const [orderDetails, setOrderDetails] = useState<OrderDetails>({} as OrderDetails);
    const navigate = useNavigate();

    useEffect(() => {
        setOrderDetails({
            name: user!.nickname,
            email: user!.username,
            address: "Test Str. 10, 2024 Berlin",
            items: itemsNumber,
            amount: shoppingCart.reduce((total, item) => total + Number.parseFloat(item.book.price!.slice(1)), 0.0)
        });
        doOrder();
    }, [])

    function doOrder() {
        try {
            dispatch(clearShoppingCart());
            setState("success");
        } catch (error) {
            setState("error");
        }
    }

    function getOrderConfirmationContainer() {
        return <div className="checkout-content-container">
            <div className="order-confirmation-container">
                <img src={DoneIcon} alt="done-icon"/>
                <p className="all-done-text">All Done</p>
                <p>Thank you for your Order !</p>
            </div>
            <div className="order-details-container">
                <p>Customer Name {orderDetails.name}</p>
                <p>Email Address {orderDetails.email}</p>
                <p>Customer Address {orderDetails.address}</p>
                <p>Order Items {orderDetails.items}</p>
                <p>Total Price {orderDetails.amount}$</p>
            </div>
            <button onClick={() => navigate("/home")} className="back-home-btn"><img src={PrevIcon}/>To Homepage</button>
        </div>
    }

    return <div className="checkout-main-container">
        {
            state === "loading" ? getOrderConfirmationContainer()
                : state === "success" ? getOrderConfirmationContainer()
                    : <p>Error while doing the Order</p>
        }
    </div>
}