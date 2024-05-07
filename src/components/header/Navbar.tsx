import MailIcon from '../../images/mail-icon-gray.png'
import CartIcon from '../../images/cart-icon-gray.png'

export default function navbar() {
    return <div className="navbar-container">
        <ul className="navbar-container-ul">
            <li><img src={CartIcon} alt="cart-icon"/> <p>Cart</p></li>
            <li><img src={MailIcon} alt="mail-icon"/> <p>Contact</p></li>
        </ul>
    </div>
}