import Header from "./Header"
import Footer from "./Footer"
import "../styles/contact.css"
import Button1 from "./Button1"
import { useEffect } from "react"


const Contact = ({cartItems, totalQuantity}) => {

    // const totalQuantity = cartItems.reduce((total, product) => total + product.quantity, 0);

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({
          top: 0
        });
      }, []); // Empty dependency array ensures the effect runs only once when the component mounts    

  return (
    <>
        <Header cartCount={totalQuantity} />
        <div id="contactpage">
            <div className="banner">
                <h1>Contact</h1>
            </div>
            <h2>
                Stay In Touch
                <div className="empty-box"></div>
            </h2>
            <div id="form" role="form">
                <form>
                    <div id="inputs">
                        <label htmlFor="name" className="label">Name</label>
                        <input type="text" name="name" className="text"/>

                        <label htmlFor="email" className="label">Email</label>
                        <input type="text" name="email" className="text"/>

                        <label htmlFor="message" className="label">Message</label>
                        <input type="text" name="message" id="message"/>
                    </div>
                    <button id="message-button">Send Message</button>
                </form>
            </div>
        </div>
        <Footer/>
    </>
 )
}

export default Contact