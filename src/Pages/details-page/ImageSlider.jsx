import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    backgroundSize: "cover",
    width: "90%",
    height: "100%",
    backgroundImage: `url(${slides[6]})`,
    position: "center",
  };

  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "10px",
    fontSize: "40px",
    fontWeight: "900",
    zIndex: "1",
    cursor: "pointer",
    color: "black",
  };

  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "60px",
    fontSize: "40px",
    fontWeight: "900",
    zIndex: "1",
    cursor: "pointer",
    color: "black",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "8px",
  };
  //   console.log(typeof slides, slides);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyle} onClick={goToPrevious}>
        {" "}
        {"<"}{" "}
      </div>
      <div style={rightArrowStyle} onClick={goToNext}>
        {" "}
        {">"}{" "}
      </div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyle}>
        {typeof slides == "string" ? (
          <Box style={dotStyles}>
            <Image src={slides} alt="" />
          </Box>
        ) : (
          slides.map((slide, slideIndex) => (
            <div
              style={dotStyles}
              key={slideIndex}
              onClick={() => {
                goToSlide(slideIndex);
              }}
            >
              ⚫
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
