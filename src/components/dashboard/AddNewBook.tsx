import '../../styles/AddNewBook.css'
import BackButton from "../body/BackButton";

export default function AddNewBook() {
    return <div className="addBookMainContainer">
        <BackButton />
        <div className="addBookContentContainer">
            <p>main Info</p>
            <input type="text" placeholder="Title" required/>
            <input type="number" placeholder="Isbn" required/>
            <p>additional Info</p>
            <input type="text" placeholder="Subtitle"/>
            <input type="text" placeholder="Author"/>
            <input type="text" placeholder="Publisher"/>
            <input type="number" placeholder="Price"/>
            <input type="number" placeholder="Pages"/>
            <input type="text" placeholder="Cover"/>
            <p>abstract about the Book</p>
            <textarea placeholder="Drop something about the book here .." className="abstractText"/>
            <button className="saveBtn">Save</button>
            <button className="cancelBtn">Cancel</button>
        </div>
    </div>
}