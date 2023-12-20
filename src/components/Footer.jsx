import "../styles/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" data-testid="footer">
        <div id="footer-left">
            <div id="links">
                <Link to="/"><div>Home</div></Link>
                <Link to="/productlist"><div>Shop</div></Link>
                <Link to="/contact"><div>Contact</div></Link>
                <Link to="/checkout"><div>Checkout</div></Link>
            </div>
            <p>Design by Ellen, Corina & Ethan</p>
        </div>
       
        <div id="footer-right">
            <p>Follow us on: </p>
            <div id="social-media">
                <a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
                <a href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
            </div>
        </div>

    </div>
  )
}

export default Footer