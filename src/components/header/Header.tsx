import Navbar from "./Navbar";
import Logo from "../../assets/images/bookspot-logo.png";
import "../../styles/Header.css"

export default function Header() {
    return <header className="main-header-container">
        <Navbar></Navbar>
        <img src={Logo} alt="logo" className="logo-header"/>
    </header>
}