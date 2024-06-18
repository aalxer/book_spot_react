import {useState} from "react";
import {State} from "../types/State";
import {deleteBookById, updateBookById, addBook} from "../domain/Api";
import {Book} from "../types/Book";

export const useDelete = () => {

    const [deleteState, setDeleteState] = useState<State>("initial")

    const deleteBook = (isbn:number) => {
        deleteBookById(isbn).then(() => {
            setDeleteState("success")
        }).catch((error) => {
            setDeleteState("error")
        })
    }

    return {deleteState, deleteBook}
}

export const useUpdate = () => {

    const [updateState, setUpdateState] = useState<State>("initial")

    const updateBook = (id:number, updatedBook:Book) => {
        updateBookById(id, updatedBook).then(() => {
            setUpdateState("success")
        }).catch((error) => {
            setUpdateState("error")
        })
    }

    return {updateState, updateBook}
}

export const useAdd = () => {

    const [addState, setAddState] = useState<State>("initial")

    const addNewBook = (newBook:Book) => {
        addBook(newBook).then(() => {
            setAddState("success")
        }).catch((error) => {
            setAddState("error")
        })
    }

    return {addState, addNewBook}
}