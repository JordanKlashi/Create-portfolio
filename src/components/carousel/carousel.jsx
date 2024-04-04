import { useState } from "react";

const Carrousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  if (slides.length <= 1) {
    return (
      <div className="carrousel">
        <img src={slides[0]} alt={`Slide 0`} />
      </div>
    );
  }

  return (
    <div className="carrousel-style">
    <div className="carrousel">
        <div
          className="arrow-left"
          onClick={prevSlide}
        ></div>
      {slides.map((image, index) => (
        <div
          key={index}
          className={index === currentSlide ? "slide active" : "slide"}
        >
          {index === currentSlide && (
            <img className="carrousel-Img" src={image.src} alt={`Slide ${index}`} />
          )}
        </div>
      ))}
        <div
          className="arrow-right"
          onClick={nextSlide}
        ></div>
    </div>
    <div className="carrousel-index">
        {currentSlide + 1} / {slides.length}
    </div>
    </div>
  );
};

export default Carrousel;
