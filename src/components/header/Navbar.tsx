import LikeIcon from '../../assets/icons/like-icon-gray.png'
import CartIcon from '../../assets/icons/cart-icon-gray.png'
import SettingIcon from '../../assets/icons/setting-icon-gray.png'
import {Link} from "react-router-dom";

export default function Navbar() {
    return <div className="navbar-container">
        <ul className="navbar-container-ul">
            <li><img src={CartIcon} alt="cart-icon"/></li>
            <li><Link to={"/impressum"}><img src={LikeIcon} alt="mail-icon"/></Link></li>
            <li><Link to={"/dashboard"}><img src={SettingIcon} alt="mail-icon"/></Link></li>
        </ul>
    </div>
}