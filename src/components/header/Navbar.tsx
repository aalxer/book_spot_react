import LikeIcon from '../../assets/icons/like-icon-gray.png'
import CartIcon from '../../assets/icons/cart-icon-gray.png'
import SettingIcon from '../../assets/icons/setting-icon-gray.png'
import LoginIcon from '../../assets/icons/login-icon-gray.png'
import LogoutIcon from '../../assets/icons/logout-icon-gray.png'
import UserIcon from '../../assets/icons/user-icon-gray.png'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUserFromState} from "../../app/store";

export default function Navbar() {

    const user = useSelector(selectUserFromState);
// <li><img src={CartIcon} alt="cart-icon"/></li>
    return <div className="navbar-container">
        <ul className="navbar-container-ul">
            <li>{user?.username}</li>
            <li><Link to={"/dashboard"}><img src={SettingIcon} alt="mail-icon"/></Link></li>
            <li><Link to={"/login"}><img src={UserIcon} alt="login-icon"/></Link></li>
            <li><Link to={"/dashboard"}><img src={LogoutIcon} alt="mail-icon"/></Link></li>
        </ul>
    </div>
}