import Header from './Header'
import Footer from './Footer'
import './Body.css'

export default function mainBody() {
    return <div className="main-content-container">
        <Header></Header>

        <div className="body-content-container">
            <h4>There are no books right now !</h4>
        </div>

        <Footer></Footer>
    </div>
}