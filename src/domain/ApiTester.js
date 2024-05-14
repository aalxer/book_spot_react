"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Api_1 = require("./Api");
(0, Api_1.getBooksPerPage)(1).then(function (book) {
    book.map(function (b) {
        //if(b.cover.length==0) {
        console.log(b);
        //}
    });
}).catch(function (error) {
    console.log(error);
});
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
