import Navbar from "./Navbar";
import Logo from "../../../assets/images/bookspot-logo.png";
import "../../../styles/Header.css"
import {Link} from "react-router-dom";

export default function Header() {
    return <header className="main-header-container">
        <Navbar />
        <div className="logoContainer">
            <Link to={"/home"}><img src={Logo} alt="logo" className="logo-header"/></Link>
        </div>
    </header>
}