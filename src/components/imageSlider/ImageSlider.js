import React, { useState } from "react";
import './imageSlider.css'
const ImageSlider = ({ imgs}) => { 
  const [index, setIndex] = useState(0); 

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  const slideRight = () => {
      const nextIndex = (index + 1) % imgs.length
     setIndex(nextIndex) 
  };

 
  return (
    imgs.length > 0 && (
        <>
            <div className = "slideImage">
                <img src={imgs[index]} alt={`pic number ${index}`} />
                 {imgs.length>1&&(<div><button onClick={slideLeft}>{"<"}</button><button onClick={slideRight}>{">"}</button></div>)}
            </div>
            
       </>
    )
  );
};

export default ImageSlider;