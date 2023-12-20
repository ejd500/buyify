import "../styles/checkout.css";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const Checkout = ({ cartItems, setCartItems }) => {
    
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({
          top: 0
        });
      }, []); // Empty dependency array ensures the effect runs only once when the component mounts
    
    
    let hst = 0.15;
    let Subtotal = 0;
    let totalQuantity = 0;
  
    for (const product of cartItems) {
      Subtotal += product.price * product.quantity;
      totalQuantity += product.quantity;
    }
  
    const totalTax = Subtotal * hst;
    const totalOrder = Subtotal + totalTax;

    const removeItem = (productId) => {
        const updatedCart = cartItems.filter((product) => product.id !== productId);
        setCartItems(updatedCart);
    };

    return (
        <>
            <Header cartCount={totalQuantity} />
            <div id="checkout">
                <div className="banner">
                    <h1>Checkout</h1>
                </div>
        
                <div className="my-bag">
                    <h2>
                        My Bag
                        <div className="empty-box"></div>
                    </h2>
        
                    {cartItems.map((product) => (
                        <div className="cart-item" key={product.id}>
                            <div className = "image-container">
                                <img src={product.image} alt={product.title} style={{
                                height:300, width:300, padding:64, boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",}}/>
                            </div>
                            <div className="info">

                                <div id="description">
                                    <h3>{product.title}</h3>
                                    <h4>{product.description}</h4>
                                </div>
            
                                <div id="price">
                                    <input type="number" value={product.quantity}n readOnly style={{ width: "64px", padding: "8px", borderRadius: "8px" }} id="quantity"/>
                                    <button onClick={() => removeItem(product.id)} id="remove">Remove</button>
                                    <h4>${(product.price * product.quantity).toFixed(2)} CAD</h4>                            
                                </div>                       
                            </div>
                        </div>
                    ))}
                </div>
        
                <div id="order-summary">
                    <h3>Order Summary</h3>
                    <div id="subtotal">
                        <h4>Subtotal</h4>
                        <h4>${Subtotal.toFixed(2)}</h4>
                    </div>
                    <div id="shipping">
                        <h4>Shipping</h4>
                        <h4>Free</h4>
                    </div>
                    <div id="tax">
                        <h4>Tax</h4>
                        <h4>${totalTax.toFixed(2)}</h4>
                    </div>
                    <div id="hr"></div>
                    <div id="total">
                        <h4>Total</h4>
                        <h4>${totalOrder.toFixed(2)}</h4>
                    </div>
                </div>          
            </div>
            <Footer/>
        </>
    );
};
    
export default Checkout;