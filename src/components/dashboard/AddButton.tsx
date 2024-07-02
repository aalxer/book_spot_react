import {Link} from "react-router-dom";
import AddIcon from "../../assets/icons/add-icon-gray.png";
import "../../styles/AddButton.css"

export default function AddButton() {
    return <div className="addBookBtnContentCotainer">
        <Link className="addBookLink" to={"/dashboard/add" }>
            <button className="addBookBtn">
                <img src={AddIcon} alt="add-icon"/>
                <p>Add new book</p>
            </button>
        </Link>
    </div>
}