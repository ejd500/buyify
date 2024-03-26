import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import { object } from "prop-types";
import ProductCard1 from "./components/ProductCard1";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetail";
import useFetch from "./customhook/useFetch";
import Contact from "./components/Contact";


function App() {
  // useFetch hook to return the category list.
  const { data: categoryList, loading: categoryLoading, error: categoryError } = useFetch('https://fakestoreapi.com/products/categories');
  // useFetch hook to return all the product data.
  const { data: productsData, loading: productsLoading, error: productsError } = useFetch('https://fakestoreapi.com/products');

  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Add up the total quanitity of all items in the cartitems array using the reduce method 
  // that goes over each item in the array and provides an accumulated total that will be stored 
  // in totalQuantity. The callback function takes the current cartitems total as a parameter along 
  // with a given product, the current total is then added to the quanitty of the given product. 
  // The initial value is set to zero.
  const totalQuantity = cartItems.reduce((total, product) => total + product.quantity, 0);

  // Use useEffect to run code whenever there is a change in productsData, productsLoading, or productsError.
  useEffect(() => {
    // if products is not Loading and if products has no error then..
    if (!productsLoading && !productsError) {
      // set products to equal productsData
      setProducts(productsData);
    }
  }, [productsData, productsLoading, productsError]);

  // If category is loading or products are loading then show "Loading..."
  if (categoryLoading || productsLoading) {
    return <div>Loading...</div>;
  }

  // If there is a category error or a products error then show "Error: {followed by the error message}".
  if (categoryError || productsError) {
    return <div>Error: {categoryError || productsError}</div>;
  }
  
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log("i'm working")
  };

  // a function to update the cart
  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
  };
  
  // a function to scroll to the top of the page.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scrolling behavior
    });
  };

  return (
    <Router basename="/buyify">
      <Routes>
        <Route index element={<Home categoryList={categoryList} products={products} setSelectedCategory={setSelectedCategory} totalQuantity={totalQuantity}/>}/>
        <Route path="/productlist" element={<ProductList products={products} setProducts={setProducts} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} totalQuantity={totalQuantity} categoryList={categoryList}/>}/>
        <Route path="/contact" element={<Contact cartItems={cartItems} totalQuantity={totalQuantity}/>}/>
        <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} updateCart={updateCart} cartItems={cartItems} onClick={scrollToTop}/>}/>
        <Route path="/productcard1" element={<ProductCard1 object={object}/>}/>
        <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems}/>}/>
      </Routes>
   
    </Router>
  );
}

export default App;