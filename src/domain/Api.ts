import {Book} from '../types/Book'
const url:String = 'http://localhost:4730';

async function getAllBooks():Promise<Array<Book>> {

    try {
        let response:Response = await fetch(url + '/books')
        console.log("Request was sent successfully")
        if(response.ok) {
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

async function getBooksPerPage(page:number):Promise<Array<Book>> {

    try {
        let response:Response = await fetch(url + '/books?_page=' + page)
        console.log("Request was sent successfully")
        if(response.ok) {
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

async function getBookPerIsbn(isbn:number):Promise<Book> {

    try {
        let response:Response = await fetch(url + '/books/' + isbn)
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

function addBook(book:Book) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    }

    let promise = fetch(url + '/books/' , requestOptions)

    promise
        .then( (response) => {
            console.log("Anfrage wurde erfolgreich gesendet")
            if(response.ok) {

                console.log("Buch wurde erfolgreich hinzugefügt")
                console.log("Statuscode: " + response.status + " , Statustext: " + response.statusText)

                response.json().then( (result) =>
                    console.log("result vom Server: " + result.title)
                ).catch( (error) => {
                    console.log("error beim einlesen der result")
                } )

            } else {
                console.log("Error beim Hinzufügen")
                console.log("Statuscode: " + response.status + " , Statustext: " + response.statusText)
            }
        })
        .catch( (error) => {
            console.log("Fehler beim Senden der Anfrage")
            console.log("Error Message: " + error.message + " , Error Status: " + error.status)
        })
}
/*
function updateBook(isbn, newBookDetails) {

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBookDetails)
    }

    let promise = fetch(url + '/books/' + isbn, requestOptions)

    promise
        .then( (response) => {
            console.log("Anfrage wurde erfolgreich gesendet")
            if(response.ok) {

                console.log("Buch wurde erfolgreich aktualisiert")
                console.log("Statuscode: " + response.status + " , Statustext: " + response.statusText)

                response.json().then( (result) =>
                    console.log("result vom Server: " + result.title)
                ).catch( (error) => {
                    console.log("error beim einlesen der result")
                } )

            } else {
                console.log("Error beim Aktualisieren")
                console.log("Statuscode: " + response.status + " , Statustext: " + response.statusText)
            }
        })
        .catch( (error) => {
            console.log("Fehler beim Senden der Anfrage")
            console.log("Error Message: " + error.message + " , Error Status: " + error.status)
        })
}
 */

async function deleteBookByIsbn(isbn:number) {

    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }

    try {
        let response = await fetch(url + '/books/' + isbn, requestOptions);
        console.log("Request was sent successfully")
        if(response.ok) {
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


export {getAllBooks, getBooksPerPage, deleteBookByIsbn, getBookPerIsbn}