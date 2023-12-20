import { Link } from "react-router-dom"
import "../styles/buttons.css"
import { useEffect } from "react";
import { useState } from "react";

const CategoryCard = ({text, category=text, setSelectedCategory}) => {

  return (
    <Link to="/productlist"><button onClick={() => setSelectedCategory(category)} className="category-card">{text}</button></Link>
  )
}

export default CategoryCard