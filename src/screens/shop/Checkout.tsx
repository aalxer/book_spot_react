import {useDispatch, useSelector} from "react-redux";
import {selectUserFromState} from "../../app/store";
import "../../styles/Checkout.css"
import {useState} from "react";
import {State} from "../../types/State";
import LoadingContainer from "../../components/shared/LoadingContainer";
export default function Checkout() {

    const [state, setState] = useState<State>("loading");
    let user = useSelector(selectUserFromState);
    const dispatch = useDispatch();

    function doOrder() {

    }

    function getOrderConfirmationContainer() {
        return  <div className="checkout-content-container">
            <div className="order-confirmation-container">
                <p>All Done</p>
                <p>Thank you {user?.nickname} for your order !</p>
            </div>
            <div className="order-details-container">

            </div>
            <button>To Homepage</button>
        </div>
    }

    return <div className="checkout-main-container">
        {state === "loading" ? <LoadingContainer/> : getOrderConfirmationContainer()}
    </div>
}