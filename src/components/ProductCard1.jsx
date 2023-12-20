import "../styles/home.css"

const ProductCard1 = ({image, title, price, id}) => {
  return (
    <div className="product-card1" key={id}>
        <img src={image} alt={title} width="100%" height="300px"id="prod-card-img"/>
        <h3>{title}</h3>
        <h4>$ {price} CAD</h4>
    </div>
  )
}

export default ProductCard1