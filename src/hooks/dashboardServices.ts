import {useState} from "react";
import {State} from "../types/State";
import {deleteBookByIsbn} from "../domain/Api";

export const useDelete = () => {

    const [deleteState, setDeleteState] = useState<State>("initial")

    const deleteBook = (isbn:number) => {
        deleteBookByIsbn(isbn).then(() => {
            setDeleteState("success")
        }).catch((error) => {
            setDeleteState("error")
        })
    }

    return {deleteState, deleteBook}
}

export const useUpdate = () => {

    const [updateState, setUpdateState] = useState<State>("initial")

    const updateBook = (isbn:number) => {
        // TODO update()
        deleteBookByIsbn(isbn).then(() => {
            setUpdateState("success")
        }).catch((error) => {
            setUpdateState("error")
        })
    }

    return {updateState, updateBook}
}