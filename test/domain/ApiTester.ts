import {getAllBooks, getBooksPerPage, getBookPerId} from "../../src/domain/Api"

getBooksPerPage(1).then((book) => {
    book.map(b => {
        //if(b.cover.length==0) {
        console.log(b)
        //}
    })
}).catch((error)=> {
    console.log(error)
})

/*
getAllBooks().then((book) => {
    book.map(b => {
        //if(b.cover.length==0) {
            console.log(b)
        //}
    })
}).catch((error)=> {
    console.log(error)
})

 */



/*
getBook(9780071494618).then((book) => {
    console.log(book)
}).catch((error) => {
    console.log(error)
})

 */