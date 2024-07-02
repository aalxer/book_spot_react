import {useEffect, useState} from "react";
import {ShoppingCartState} from "../types/ShoppingCartState";
import {useSelector} from "react-redux";
import {selectProduktsFromState} from "../app/store";

export const useCustomerBooks = () => {

    const [state, setState] = useState<ShoppingCartState>("fetching");
    const customerBooks = useSelector(selectProduktsFromState);
    const [itemsNumber, setItemsNumber] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0.0);

    useEffect(() => {
        getBooks();
    }, [customerBooks])

    function getBooks() {
        if (customerBooks && customerBooks.length) {
            setItemsNumber(customerBooks.length);
            // TODO totalPrice
            setState("success");
        } else if (customerBooks && customerBooks.length === 0) {
            setState("empty");
        }
        // TODO wann error ?
    }

    return {state, customerBooks, itemsNumber, totalPrice}
}