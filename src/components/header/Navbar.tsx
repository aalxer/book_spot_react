import LikeIcon from '../../assets/icons/like-icon-gray.png'
import CartIcon from '../../assets/icons/cart-icon-gray.png'
import SettingIcon from '../../assets/icons/setting-icon-gray.png'
import LogoutIcon from '../../assets/icons/logout-icon-gray.png'
import UserIcon from '../../assets/icons/user-icon-gray.png'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUserFromState} from "../../app/store";
import LoginIcon from "../../assets/icons/login-icon-gray.png"

export default function Navbar() {

    const user = useSelector(selectUserFromState);

    return <div className="navbar-container">
        {
            user && user.admin ?
                <ul className="navbar-container-ul">
                    <li>Hello ! {user?.username}</li>
                    <li><Link to={"/dashboard"}><img src={LogoutIcon} alt="mail-icon"/></Link></li>
                    <li><Link to={"/dashboard"}><img src={SettingIcon} alt="mail-icon"/></Link></li>
                </ul>
                : user && !user.admin ?
                    <ul className="navbar-container-ul">
                        <li>Hello ! {user?.username}</li>
                        <li><img src={CartIcon} alt="cart-icon"/></li>
                        <li><Link to={"/home/impressum"}><img src={LikeIcon} alt="like-icon"/></Link></li>
                        <li><Link to={"/dashboard"}><img src={LogoutIcon} alt="mail-icon"/></Link></li>
                    </ul>
                    :
                    <ul className="navbar-container-ul">
                        <li><Link to={"/login"}>Login <img src={LoginIcon} alt="login-icon"/></Link></li>
                    </ul>
        }
    </div>
}