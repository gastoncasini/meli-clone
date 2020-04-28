import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Carousel() {
  let [current, setCurrent] = useState(0);
  let [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => current + 1);
    }, 4000);
    if (!animate) {
      console.log(interval);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [animate]);

  function stopAnimation() {
    setAnimate(false);
  }

  function initAnimation() {
    setAnimate(true);
  }

  function nextSlide() {
    setCurrent(current + 1);
  }

  function prevSlide() {
    setCurrent(current - 1);
  }

  //
  function setSlide(e) {
    let slide = Number(e.target.attributes[0].nodeValue);
    setCurrent(slide);
  }

  // current reset
  if (current > 2) {
    setCurrent(0);
  }

  if (current < 0) {
    setCurrent(2);
  }
  // only works with 3 slides
  let offset = current * 33.3;
  let style = { transform: `translateX(-${offset}%)` };

  // current slide style

  let isCurrentStyle = (current, id) => {
    if (current === id) {
      return "slidenav__item slidenav__item--current";
    } else {
      return "slidenav__item";
    }
  };

  // current slide accesiblility text
  let txt1 = current === 0 ? "oferta actual" : "";
  let txt2 = current === 1 ? "oferta actual" : "";
  let txt3 = current === 2 ? "oferta actual" : "";

  return (
    <section
      className="carousel"
      aria-labelledby="carouselheading"
      onMouseEnter={stopAnimation}
      onMouseLeave={initAnimation}
      onFocus={stopAnimation}
      onBlur={initAnimation}
    >
      <h1 id="carouselheading" className="visuallyhidden">
        Ofertas
      </h1>
      <ul className="slides-container" style={style}>
        <li className="slide">
          <article>
            <h2>compra desde casa</h2>
            <h3>computacion</h3>
          </article>
        </li>
        <li className="slide">
          <article>
            <h2>plantas para tu jardin </h2>
            <h3>jardineria</h3>
          </article>
        </li>
        <li className="slide">
          <article>
            <h2>tu nueva moto te esta esperando</h2>
            <h3>motos</h3>
          </article>
        </li>
      </ul>

      <ul>
        <li>
          <button
            aria-label="haga click para ver la anterior"
            type="button"
            className="prev-button"
            onClick={prevSlide}
          ></button>
        </li>
        <li>
          <button
            aria-label="haga click para ver la siguiente"
            type="button"
            className="next-button"
            onClick={nextSlide}
          ></button>
        </li>
      </ul>

      <ul className="slidenav">
        <li className={isCurrentStyle(current, 0)}>
          <button data-slide="0" onClick={setSlide}>
            <span className="visuallyhidden">News 1</span>
            <span className="visuallyhidden">{txt1}</span>
          </button>
        </li>
        <li className={isCurrentStyle(current, 1)}>
          <button data-slide="1" onClick={setSlide}>
            <span className="visuallyhidden">News 1</span>
            <span className="visuallyhidden">{txt2}</span>
          </button>
        </li>
        <li className={isCurrentStyle(current, 2)}>
          <button data-slide="2" onClick={setSlide}>
            <span className="visuallyhidden">News 2</span>
            <span className="visuallyhidden">{txt3}</span>
          </button>
        </li>
      </ul>
    </section>
  );
}
