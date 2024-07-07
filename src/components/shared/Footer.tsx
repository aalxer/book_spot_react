import '../../styles/Footer.css'
import Logo from '../../assets/images/bookspot-logo-gray.png'
import Visa from '../../assets/icons/visa-icon-gray.png'
import Sepa from '../../assets/icons/sepa-icon-gray.png'
import Master from '../../assets/icons/mastercard-icon-gray.png'
import Applepay from '../../assets/icons/apple-pay-icon-gray.png'
import Facebook from '../../assets/icons/fb-icon-gray.png'
import Instagram from '../../assets/icons/insta-icon-gray.png'
import X from '../../assets/icons/x-icon-gray.png'
import {NavLink} from "react-router-dom";
import Navbar from "./header/Navbar";

export default function Footer() {

    return <footer className="footer-main-container">
        <div className="footer-content-container">
            <div className="content-container-left">
                <img src={Logo} alt="logo"/>
                <p>This Website is a project for the HTW-Berlin</p>
                <p>Copyright 2024. All rights reserved</p>
            </div>
            <div className="content-container-right">
                <div className="right-content-links-container">
                    <p>useful links</p>
                    <ul>
                        <li><NavLink to={"/home/impressum"}>impressum</NavLink></li>
                        <li><NavLink to={"/home/impressum"}>privacy policy</NavLink></li>
                        <li>contact us</li>
                        <li>order book</li>
                        <li>your cart</li>
                    </ul>
                </div>
                <div className="right-content-payment-follow-container">
                    <div className="payment-methods-container">
                        <p>payment methods</p>
                        <ul>
                            <li><img src={Visa} alt="visacard-logo"/></li>
                            <li><img src={Sepa} alt="sepa-logo"/></li>
                            <li><img src={Master} alt="mastercard-logo"/></li>
                            <li><img src={Applepay} alt="applepay-logo"/></li>
                        </ul>
                    </div>
                    <div className="follow-us-container">
                        <p>follow us</p>
                        <ul>
                            <li><img src={Facebook} alt="facebook-logo"/></li>
                            <li><img src={Instagram} alt="instagram-logo"/></li>
                            <li><img src={X} alt="twitterx-logo"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}