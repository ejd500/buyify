import Header from "./Header";
import shopping from "../Images/shopping.jpg"
import "../styles/home.css";
import Button1 from "./Button1";
import ProductCard1 from "./ProductCard1";
import Footer from "./Footer";
import { useEffect } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";

const Home = ({categoryList, products, setSelectedCategory, totalQuantity}) => {
        
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({
            top: 0,
        });
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <>
        <Header cartCount={totalQuantity} />
        <div id="homepage" data-testid="homepage">
            <div id="img-container">
                <img src={shopping} alt="shopping" id="shopping" />
                <div id="gradient">
                    <div id="intro">
                        <h1>Buyify</h1>
                        <Link to="/productlist"><Button1 text="Get Started" color="white" backgroundColor="black"/></Link>
                    </div>
                </div>
            </div>

            <div id="categories">
                <Slider setSelectedCategory={setSelectedCategory} categoryList={categoryList}/>
            </div>

            <h2>
                Featured Products
                <div className="empty-box"></div>
            </h2>
            <div id="featured-products1">
                {products && products.slice(0, 6).map(object => (
                    <Link to={`/product/${object.id}`} key={object.id} className = "product-link"><ProductCard1 key={object.id} image={object.image} title={object.title} price={object.price.toFixed(2)}/></Link>
                ))}
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home