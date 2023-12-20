import "../styles/productitem.css"

const ProductItem = ({ product }) => {

  return (
    
    <div className="product-item">
      <img src={product.image} alt={product.title} style={{ height:300,  width:300, padding:64, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }} />
      <h3>{product.title}</h3>     
      <p>$ {product.price.toFixed(2)} CAD</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>      
    </div>
  );
};

export default ProductItem;
 