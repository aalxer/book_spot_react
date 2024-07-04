import {useEffect, useState} from "react";
import {CustomerBooksState} from "../types/CustomerBooksState";
import {useSelector} from "react-redux";
import {selectProduktsFromState} from "../app/store";

export const useCustomerBooks = () => {

    const [state, setState] = useState<CustomerBooksState>("fetching");
    let customerBooks = useSelector(selectProduktsFromState);
    const [itemsNumber, setItemsNumber] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0.0);

    useEffect(() => {
        // customerBooks wird vom Store aktualisiert und dementsprechend die Komponente, die diesen verwenden,
        // wir wollen aber noch unsere weitere Variable aktualisieren, deswegen rufen wir die Methode nochmal
        getBooks();
    },)

    function getBooks() {
        if (customerBooks && customerBooks.length) {
            const totalItemsNumber = customerBooks.reduce((total, item) => total + item.count, 0);
            setItemsNumber(totalItemsNumber);
            const totalPrice = customerBooks.reduce((total, item) => total + Number.parseFloat(item.book.price!.slice(1)), 0.0);
            setTotalPrice(totalPrice);
            setState("success");
        } else if (customerBooks && customerBooks.length === 0) {
            setState("empty");
        }
        // TODO wann error ?
    }

    return {state, customerBooks, itemsNumber, totalPrice}
}