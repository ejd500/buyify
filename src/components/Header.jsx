import "../styles/header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
 
const Header = ({cartCount}) => {

  return (
    <div className="header" data-testid="header">

      <div id="top">
 
        <div id="logo" data-testid="logo">
            <div id="buyify">
              Buyify
            </div>
            <Link to="/"><div id="shop-online">Shop Online</div></Link>
        </div>
    
        <div id="phone-email-checkout" data-testid="phone-email-checkout">

          <Link to="/contact"><div id="phone">
            <FontAwesomeIcon icon={faPhone} />
            709-123-4567
          </div></Link>

          <Link to="/contact"><div id="email">
            <FontAwesomeIcon icon={faEnvelope} />
            buyify@gmail.com
          </div></Link>

          <div id="header-checkout">
            <Link to="/checkout"><FontAwesomeIcon icon={faShoppingCart} /></Link>
            <Link to="/checkout"><div id="num-items">{cartCount}</div></Link>
          </div>
        </div>
 
      </div>
 
      <nav id="nav">
        <Link to="/"><div id="home">Home</div></Link>
        <Link to="/productlist"><div id="shop">Shop</div></Link>
        <Link to="/contact"><div id="contact">Contact</div></Link>
      </nav>
    </div>
 
    
  )
}
 
export default Header