import "../styles/productdetails.css"
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Header from "./Header"
import Footer from "./Footer";
import { useEffect } from "react";



const ProductDetail = ({ products, addToCart, cartItems = [], updateCart}) => {
  
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
      top: 0
    });
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Extracting the 'id' parameter from the URL using the 'useParams' hook

  const { id } = useParams();

  // UseState() hook used to Initialize the "quantity" state varaiable to 1 and the setQuanitity function to update the state.

  const [quantity, setQuantity] = useState(1); 

  //Find the product with a certain parameter ID in the products array.

  const product = products.find((product) => product.id === parseInt(id));

  //Handle changes in quantity input field by user on ProductDetails page, Math.max used to prevent quantity from being less than 1.

  const handleQuantityChange = (event) => {
    setQuantity(Math.max((event.target.value), 1));
  };
  
  //Handle when a customer clicks on the "Add to cart" button on the ProductDetail page. If the item is already in the cart, update the quantity of that exisiting product, if not add  the item to the cart with the specified quantity.

  const handleAddToCart = () => {
    const existingCartItem = cartItems.find((existingProduct) => existingProduct.id === product.id);
  
    if (existingCartItem) {
    
      const updatedCart = cartItems.map((cartProduct) =>
        cartProduct.id === product.id ? { ...cartProduct, quantity: cartProduct.quantity + quantity } : cartProduct
      );
  
      updateCart(updatedCart);

    } else {
     
      addToCart({ ...product, quantity });
    };
    
  };
  
  //Add up the total quanitity of all items in the cartitems array using the reduce method that goes over each item in the array and provides an accumulated total that will be stored in totalQuantity. The callback function takes the current cartitems total as a parameter along with a given product, the current total is then added to the quanitty of the given product. The initial value is set to zero.

  const totalQuantity = cartItems.reduce((total, product) => total + product.quantity, 0);
  
  return (
    <>
      <Header cartCount={totalQuantity} />
      <div id="product-details-page">
        
        <div className="banner">
          <h1>{product.category ? `${product.category
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}` : 'Shop'}
          </h1>
        </div>

        <div className="product-detail">
            <img src={product.image} alt={product.title} style={{ height:"500px",  width:"100%", maxWidth:"100%", padding:64, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}/>
            <div className = "details">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>$ {product.price.toFixed(2)} CAD</p>
                                  
                <input type="number" value={quantity} onChange={(handleQuantityChange)}style={{width: "64px",  padding: "8px", borderRadius: "8px" }}/>                    
              
                <button id = "cart" onClick={handleAddToCart}>Add To Cart</button>  
            </div>            
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductDetail;




