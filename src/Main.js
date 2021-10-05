import React, { useState, useEffect } from "react";
import data from "./menu.js";

const Slider = ({ slider }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (slider.length === 2) {
    slider = [...slider, ...slider];
  }

  useEffect(() => {
    let lastSlide = slider.length - 1;
    if (activeIndex < 0) {
      setActiveIndex(lastSlide);
    }
    if (activeIndex > lastSlide) {
      setActiveIndex(0);
    }
  }, [activeIndex, slider, slider.length]);
  useEffect(() => {
    let sliderInterval = setInterval(() => {
      setActiveIndex(activeIndex + 1);
    }, 3000);
    return () => clearInterval(sliderInterval);
  }, [activeIndex]);

  // useEffect(() => {
  //   setActiveIndex(0);
  // }, [slider]);

  return (
    <div className="slider">
      {slider.map((slide, slideIndex) => {
        const { title, image, text } = slide;
        let position = "slider__nextSlide";
        if (slideIndex === activeIndex) {
          position = "slider__activeSlide";
        }
        if (
          slideIndex === activeIndex - 1 ||
          (activeIndex === 0 && slideIndex === slider.length - 1)
        ) {
          position = "slider__lastSlide";
        }

        return (
          <div key={slideIndex} className={`slider__article ${position}`}>
            <h3>{title}</h3>
            <img className="slider__Img" src={image} alt={title} />
            <p>{text}</p>
          </div>
        );
      })}
      <button
        className="slider__buttonL"
        onClick={() => setActiveIndex(activeIndex - 1)}
      >
        prev
      </button>
      <button
        className="slider__buttonR"
        onClick={() => setActiveIndex(activeIndex + 1)}
      >
        next
      </button>

      <div className="slider__underlineConteiner">
        {slider.map((slide, index) => {
          let clName = "slider__underline";
          if (index === activeIndex) {
            clName = "slider__underline slider__underline_active";
          }
          return (
            <button
              key={index}
              className={clName}
              onClick={() => setActiveIndex(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

const Main = () => {
  const [curItem, setCurItem] = useState(0);
  const slider = data[curItem].slider;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slider.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slider]);

  return (
    <main>
      <nav>
        {data.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => setCurItem(item.id)}
              className={`nav-btn ${item.id === curItem && "activ-btn"}`}
            >
              {item.title}
            </button>
          );
        })}
      </nav>

      {slider.length > 1 && (
        <section className="sectionCenter">
          <Slider slider={slider} />
        </section>
      )}
      {slider.length === 1 && (
        <section className="sectionCenter">
          <article className="activeSlide" key={0}>
            <h3>{slider[0].title}</h3>
            <img
              className="sliderImg"
              src={slider[0].image}
              alt={slider[0].title}
            />
            <p>{slider[0].text}</p>
          </article>

          {/* {slider.map((slide, slidIndex) => {
            const { title, image, text } = slide;
            let position = "activeSlide";
            return (
              <article className={position} key={slidIndex}>
                <h3>{title}</h3>
                <img className="sliderImg" src={image} alt={title} />
                <p>{text}</p>
              </article>
            );
          })} */}
        </section>
      )}
    </main>
  );
};

export default Main;
