import {Book} from "../../domain/Book";
import DefaultCover from '../../images/default-book-cover.png'
import CartIcon from '../../images/cart-icon-gray-30px.png'
import SaveIcon from '../../images/save-icon-outlined-pink.png'
import ShareIcon from '../../images/share-icon-outlined-pink.png'
import DeliveryIcon from '../../images/delivery-time-icon-gry-outlined.png'
import VisaIcon from "../../images/visa-icon-gray-mini.png";
import SepaIcon from "../../images/sepa-icon-gray-mini.png";
import MasterCardIcon from "../../images/master-icon-gray-mini.png";
import ApplepayIcon from "../../images/applepay-icon-gray-mini.png";
import SecuredIcon from "../../images/secrued-icon-gray.png"
import MoneyBackIcon from "../../images/money-back-icon-gray.png"
import './DisplayBookContainer.css'

const book: Book = {
    abstract: "Protect your Web 2.0 architecture against the latest wave of cybercrime using expert tactics from Internet security professionals. Hacking Exposed Web 2.0 shows how hackers perform reconnaissance, choose their entry point, and attack Web 2.0 - based services, and reveals detailed countermeasures and...",
    author: "Rich Cannings, Himanshu Dwivedi, Zane Lackey",
    cover: "http://localhost:4730/covers/9780071494618.png",
    isbn: 9780071494618,
    numPages: 258,
    price: "$12.03",
    publisher: "McGraw-Hill",
    subtitle: "Web 2.0 Security Secrets and Solutions",
    title: "Hacking Exposed Web 2.0"
}

export default function DisplayBookContainer() {
    return <div className="content-container">
        <div className="book-head-container">
            <div className="book-head-left-container">
                <img src={book.cover} alt="book-cover"/>
            </div>
            <div className="book-head-middle-container">
                <div className="title-container">
                    <p>by: {book.author}</p>
                    <h1>{book.title}</h1>
                    <h3>{book.subtitle}</h3>
                </div>
                <div className="buy-container">
                    <h1>{book.price}</h1><p> inkl. gesetzt. MwSt.</p>
                    <button><img src={CartIcon} alt="cart-icon"/><span>Add To Cart</span></button>
                </div>
                <div className="save-share-container">
                    <a href=""><img src={SaveIcon} alt="save-icon"/>save</a>
                    <a href=""><img src={ShareIcon} alt="share-icon"/>share</a>
                </div>
            </div>
            <div className="book-head-right-container">
                <div className="delivery-info-container">
                    <img src={DeliveryIcon} alt="delivery-icon"/>
                    <p>delivery within 24 hours</p>
                </div>
                <div className="delivery-info-container">
                    <img src={MoneyBackIcon} alt="delivery-icon"/>
                    <p>money refund guaranteed</p>
                </div>
                <div className="delivery-info-container">
                    <img src={SecuredIcon} alt="delivery-icon"/>
                    <p>secured payment</p>
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
}