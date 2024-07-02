import CartIcon from '../../assets/icons/cart-icon-gray-30px.png'
import SaveIcon from '../../assets/icons/save-icon-outlined-pink.png'
import ShareIcon from '../../assets/icons/share-icon-outlined-pink.png'
import VisaIcon from "../../assets/icons/visa-icon-gray-mini.png";
import SepaIcon from "../../assets/icons/sepa-icon-gray-mini.png";
import MasterCardIcon from "../../assets/icons/master-icon-gray-mini.png";
import ApplepayIcon from "../../assets/icons/applepay-icon-gray-mini.png";
import DefaultCover from '../../assets/images/default-book-cover.png'
import '../../styles/BookDetails.css'
import {useNavigate, useParams} from "react-router-dom";
import {useGetbook} from "../../hooks/useGetbook";
import LoadingContainer from "../../components/body/LoadingContainer";
import BackButton from "../../components/body/BackButton";

export default function BookDetails() {

    const {bookId} = useParams<{ bookId: string }>();
    const {state, book} = useGetbook(bookId);
    const navigate = useNavigate();

    function displayBookDetails() {
        return <div className="book-details-main-container">
            <BackButton />
            <div className="content-container">
                <div className="book-head-container">
                    <div className="book-head-left-container">
                        <img src={book.cover?.length === 0 ? DefaultCover : book.cover} alt="book-cover"/>
                    </div>
                    <div className="book-head-middle-container">
                        <div className="title-container">
                            <p>by: {book.author}</p>
                            <h1>{book.title}</h1>
                            <h3>{book.subtitle}</h3>
                        </div>
                        <div className="save-share-container">
                            <a href=""><img src={SaveIcon} alt="save-icon"/>save</a>
                            <a href=""><img src={ShareIcon} alt="share-icon"/>share</a>
                        </div>
                    </div>
                    <div className="book-head-right-container">
                        <div className="buy-container">
                            <h1>{book.price}</h1><p> inkl. gesetzt. MwSt.</p>
                            <button><img src={CartIcon} alt="cart-icon"/><span>Add To Cart</span></button>
                        </div>
                        <div className="payment-info-container">
                            <p>We accept</p>
                            <ul>
                                <li><img src={VisaIcon} alt="visacard-logo"/></li>
                                <li><img src={SepaIcon} alt="sepa-logo"/></li>
                                <li><img src={MasterCardIcon} alt="mastercard-logo"/></li>
                                <li><img src={ApplepayIcon} alt="applepay-logo"/></li>
                            </ul>
                        </div>
                        <div className="info-links-container">
                            <a href="">Our privacy policy</a>
                            <a href="">Do you have any question ?</a>
                        </div>
                    </div>
                </div>
                <div className="book-des-container">
                    <h4>Description</h4>
                    <p>{book.abstract}</p>
                </div>
                <div className="book-details-container">
                    <h4>Details</h4>
                    <div className="details-container">
                        <p>Isbn: {book.isbn}</p>
                        <p>Publisher: {book.publisher}</p>
                        <p>Pages: {book.numPages}</p>
                        <p>Publish Date: 2022.05.05</p>
                        <p>Language: English</p>
                        <p>Category: unknown</p>
                    </div>
                </div>
            </div>
        </div>
    }

    return (<>
        {state === "success" ? displayBookDetails()
            : state === "error" ? navigate("/error")
                : <LoadingContainer/>}
    </>)
}