import "../styles/slider.css"
import { useState } from "react";
import CategoryCard from "./CategoryCard";

const Slider = ({categoryList, setSelectedCategory}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const showNewRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === categoryList.length - 3 ? 0 : prevIndex + 1));
    };
    
    const showNewLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? categoryList.length - 3 : prevIndex - 1));
    };

  return (
    <>
        
        <div className="slider-container">
            <button className="arrow-left" onClick={showNewLeft}>&lt;</button>
            <div className="slider">
                {categoryList && categoryList.slice(currentIndex, currentIndex + 3).map((category, index) => (
                    <CategoryCard
                    setSelectedCategory={setSelectedCategory}
                    key={index}
                    text={category}
                    style={{ display: index === 1 ? 'block' : 'none' }}
                    />
                ))}
            </div>
            <button className="arrow-right" onClick={showNewRight}>&gt;</button>
        </div>
       
    </>
  )
}

export default Slider


// import "../styles/slider.css"
// import { useState } from "react";
// import CategoryCard from "./CategoryCard";



// const Slider = ({categoryList, setSelectedCategory}) => {

//     const [currentIndex, setCurrentIndex] = useState(0);
   


//     const showNewRight = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === categoryList.length - 3 ? 0 : prevIndex + 1));
//     };
    
//     const showNewLeft = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? categoryList.length - 3 : prevIndex - 1));
//     };

   

//   return (
//     <>        
//         <div className="slider-container">
//             <button className="arrow-left" onClick={showNewLeft}>&lt;</button>
//             <div className="slider">
//                 {categoryList && categoryList.slice(currentIndex, currentIndex + 3).map((category, index) => (
//                     <CategoryCard
//                     key={index}
//                     text={category}
//                     setSelectedCategory={setSelectedCategory}
//                     style={{ display: index === 1 ? 'block' : 'none' }}
//                     />
//                 ))}
                
//             </div>
//             <button className="arrow-right" onClick={showNewRight}>&gt;</button>
//         </div>
       
//     </>
//   )
// }

// export default Slider