import React, { useState, useEffect} from 'react';
import ProductItem from './ProductItem';
import "../styles/productlist.css"
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';

const ProductList = ({products, selectedCategory, setSelectedCategory, totalQuantity, categoryList}) => {
  
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
      top: 0
    });
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // UseEffect hook to reset the current page when a selected category is clicked on by a user. 
  useEffect(() => {
    setCurrentPage(1); 
  }, [selectedCategory]);

  const itemsPerPage = 8;

  // calculating start and end indexs for the current page.
  const startIndex = (currentPage - 1) *itemsPerPage
  const endIndex = startIndex + itemsPerPage;
  
  // Filtering the product array by selectedcategory.
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  
  // calculate # of pages of items for a particular category. 
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  // If a category is selected, filter the products array by the category property and slice is used to extract the currentProducts array. 
  // If no category selected, it takes all the products as the new array stored in currentProducts. The startIndex and endIndex are calculated 
  // to define the range of items to be displayed. 
  const currentProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory).slice(startIndex, endIndex) : products.slice(startIndex, endIndex);  

  return (
    <>
      <Header cartCount={totalQuantity} />
      <div className = "container">
        
        <div className = "banner">
          <h1>{selectedCategory ? `${selectedCategory
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}` : 'Shop'}
          </h1>
        </div>

        <div className = "main">

          <div className = "categories">
              
            <h2>Categories</h2>
            <h3 onClick={() => setSelectedCategory(null)}>All</h3>
            {categoryList.map((category) => (
              <h3 key={category} onClick={() => setSelectedCategory(category)}>
                {category
                  .split(' ')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </h3>
            ))}
          </div>  

          <div className="product-list" data-testid="product-list">
              {currentProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className = "details-link">
              <ProductItem product={product} />
              </Link>
              ))}
          </div>      
        </div>  

        <div className="scroll">
            <button onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1} className='btn'>
            &lt;
            </button>

            <span>{currentPage} of {totalPages}</span>
            
            <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages} className='btn' >
            &gt;
            </button>
        </div>
      </div> 
      <Footer/> 
    </>
  );
};

export default ProductList;

