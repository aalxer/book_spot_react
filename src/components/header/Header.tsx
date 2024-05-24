import Navbar from "./Navbar";
import Logo from "../../images/bookspot-logo.png";
import "./Header.css"

export default function Header() {
    return <header className="main-header-container">
        <Navbar></Navbar>
        <img src={Logo} alt="logo" className="logo-header"/>
    </header>
}