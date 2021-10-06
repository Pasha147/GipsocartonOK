import React, { useState, useEffect } from "react";
import data from "./menu.js";
import Slider from "./Slider";

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
        </section>
      )}
    </main>
  );
};

export default Main;
