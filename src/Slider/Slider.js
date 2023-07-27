import React, { useState, useEffect, useRef } from "react";
import dataSlider from "./dataSlider.js";
import "./Slider.css";
const Slider = () => {
  const [indexSlide, setIndexSlide] = useState(1);
  const [chooseSlide, setchooseSlide] = useState(false); // false => true
  let setSlide = useRef(null);
  useEffect(() => {
    // index = 1
    if (!chooseSlide) {
      if (indexSlide != dataSlider.length) {
        setSlide.current = setTimeout(() => {
          setIndexSlide(indexSlide + 1);
        }, 7000);
      } else {
        setSlide.current = setTimeout(() => {
          setIndexSlide(1);
        }, 7000);
      }
    } else {
      setchooseSlide(false);
      if (indexSlide != dataSlider.length) {
        setSlide.current = setTimeout(() => {
          setIndexSlide(indexSlide + 1);
        }, 7000);
      } else {
        setSlide.current = setTimeout(() => {
          setIndexSlide(1);
        }, 7000);
      }
    }
    console.log(indexSlide + ",");
  }, [indexSlide]);
  const moveDot = (index) => {
    clearTimeout(setSlide.current);
    setIndexSlide(index);
    setchooseSlide(true);
  };
  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={indexSlide === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={process.env.PUBLIC_URL + `Img/img${index + 1}.jpg`} />
          </div>
        );
      })}
      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={indexSlide == index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
