import Navbar from "./Navbar";
// musste extra in declaration.d.ts deklariert werden, sonst sind nur module zulässig zu importieren
import Logo from "../../images/bookspot-logo.png";
import "./Header.css"

export default function header() {
   return <header className="main-header-container">
       <Navbar></Navbar>
       <img src={Logo} alt="logo" className="logo-header"/>
   </header>
}