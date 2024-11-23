import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
        <button disabled={imageIndex === 0} className="arrow" onClick={() => changeSlide("left")}>
          <img src="/arrow.png" alt="" />
        </button>
        <div className="imgContainer">
        <div className="image-index">{imageIndex + 1}/{images.length}</div>
          <img src={images[imageIndex]} alt="" />
        </div>
        <button disabled={imageIndex === images.length-1} className="arrow r-right" onClick={() => changeSlide("right")}>
          <img src="/arrow.png" className="right" alt="" />
        </button>
        <div className="close" onClick={() => setImageIndex(null)}>
          X
        </div>
      </div>
      
      )}
      <div className="bigImage">
    
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
      
          
          
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
         
        ))}
      </div>
    </div>
  );
}

export default Slider;
