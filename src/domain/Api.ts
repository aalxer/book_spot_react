import {Book} from '../types/Book'
import {ShoppingCartState} from "../types/ShoppingCartState";

const url: String = 'http://localhost:4730';

async function getAllBooks(): Promise<Array<Book>> {

    try {
        let response: Response = await fetch(url + '/books')
        console.log("Request was sent successfully")
        if (response.ok) {
            console.log("response was successfully")
            console.log("Response Status: " + response.status + " , Response Text: " + response.statusText)
            return await response.json()
        } else {
            console.log("Response failed")
            console.log("Response Status: " + response.status + " , Response Text: " + response.statusText)
            throw new Error(`${response.status} , ${response.statusText}`);
        }
    } catch (error) {
        console.log("Request sending faild")
        console.log(error)
        throw new Error("Request sending faild")
    }
}

async function getBooksPerPage(page: number): Promise<Array<Book>> {

    try {
        let response: Response = await fetch(url + '/books?_page=' + page)
        console.log("Request was sent successfully")
        if (response.ok) {
            console.log("response was successfully")
            console.log("Response Status: " + response.status + " , Response Text: " + response.statusText)
            return await response.json()
        } else {
            console.log("Response failed")
            console.log("Response Status: " + response.status + " , Response Text: " + response.statusText)
            throw new Error();
        }
    } catch (error) {
        console.log("Request sending faild")
        console.log(error)
        throw new Error()
    }
}

async function getBookPerId(id: number): Promise<Book> {

    try {
        let response: Response = await fetch(url + '/books/' + id)
        console.log("Request was sent successfully")
        if (response.ok) {
            console.log("Got the Book from server .. ")
            console.log("Response Status: " + response.status + " , Response Text: " + response.statusText)
            return await response.json()
        } else {
            console.log("Response failed")
            console.log("Response Status: " + response.status + " , Response Text: " + response.statusText)
            throw Error()
        }
    } catch (error) {
        console.log("Request sending faild")
        console.log(error)
        throw Error()
    }
}

async function addBook(book: Book) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    }

    try {
        let response = await fetch(url + '/books/', requestOptions);
        console.log("Request was sent successfully")
        if (response.ok) {
            console.log("response was successfully")
            console.log("Response Status: " + response.status + " , Response Text: " + response.statusText)
            return await response.json()
        } else if (response.status === 400) {
            const errorResponse = await response.json();
            console.log("Invalid Request")
            console.log(errorResponse.errors);
            throw Error(errorResponse)
        } else {
            console.log("Response failed")
            console.log("Response Status: " + response.status + " , Response Text: " + response.statusText)
            throw new Error(`${response.status} , ${response.statusText}`);
        }
    } catch (error) {
        console.log("Request sending faild")
        console.log(error)
        throw new Error("Request sending faild")
    }
}

async function updateBookById(id: number, updatedBook: Book) {

    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedBook)
    }

    try {
        let response = await fetch(url + '/books/' + id, requestOptions);
        console.log("Request was sent successfully")
        if (response.ok) {
            console.log("response was successfully")
            console.log("Response Status: " + response.status + " , Response Text: " + response.statusText)
            return await response.json()
        } else if (response.status === 400) {
            const errorResponse = await response.json();
            console.log("Invalid Request")
            console.log(errorResponse.errors);
            throw Error(errorResponse)
        } else {
            console.log("Response failed")
            console.log("Response Status: " + response.status + " , Response Text: " + response.statusText)
            throw new Error(`${response.status} , ${response.statusText}`);
        }
    } catch (error) {
        console.log("Request sending faild")
        console.log(error)
        throw new Error("Request sending faild")
    }
}

async function deleteBookById(isbn: number) {

    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    }

    try {
        let response = await fetch(url + '/books/' + isbn, requestOptions);
        console.log("Request was sent successfully")
        if (response.ok) {
            console.log("response was successfully")
            console.log("Response Status: " + response.status + " , Response Text: " + response.statusText)
            return await response.json()
        } else {
            console.log("Response failed")
            console.log("Response Status: " + response.status + " , Response Text: " + response.statusText)
            throw new Error(`${response.status} , ${response.statusText}`);
        }
    } catch (error) {
        console.log("Request sending faild")
        console.log(error)
        throw new Error("Request sending faild")
    }

    /*
    let promise = fetch(url + '/books/' + isbn, requestOptions)

    promise
        .then( (response) => {
            console.log("Anfrage wurde erfolgreich gesendet")
            if(response.ok) {

                console.log("Buch wurde erfolgreich gelöscht")
                console.log("Statuscode: " + response.status + " , Statustext: " + response.statusText)

                response.json().then( (result) =>
                    console.log("result vom Server: " + result.title)
                ).catch( (error) => {
                    console.log("error beim einlesen der result")
                } )

            } else {
                console.log("Error beim Löschen")
                console.log("Statuscode: " + response.status + " , Statustext: " + response.statusText)
            }
        })
        .catch( (error) => {
            console.log("Fehler beim Senden der Anfrage")
            console.log("Error Message: " + error.message + " , Error Status: " + error.status)
        })

     */
}

async function login(email: string, password: string) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password
        })
    }

    try {
        let response = await fetch(url + '/login', requestOptions);
        console.log("Request was sent successfully")
        return response;
    } catch (error) {
        console.log("Request sending faild")
        console.log(error)
        throw new Error("Request sending faild")
    }
}

async function updateUserShoppingCart(userId:number, products:ShoppingCartState[]) {

    const requestOptions = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            shoppingCart: products
        })
    }

    try {
        let response = await fetch(url + '/users/' + userId , requestOptions);
        console.log("Request was sent successfully")
        return response;
    } catch (error) {
        console.log("Request sending faild")
        console.log(error)
        throw new Error("Request sending faild")
    }
}

export {getAllBooks, getBooksPerPage, addBook, deleteBookById, updateBookById, getBookPerId, login, updateUserShoppingCart}