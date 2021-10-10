import React, { useState, useEffect } from "react";
import data from "./menu.js";
import Slider from "./Slider";
import About from "./About";

const Main = () => {
  const [curItem, setCurItem] = useState(0);
  let slider = data[curItem].slider;
  let { about } = data[curItem];
  console.log(about);

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

      {slider && slider.length > 1 && (
        <section className="sectionCenter">
          <Slider slider={slider} />
        </section>
      )}
      {about && (
        <section className="sectionCenter">
          <About about={data[curItem].about} />
        </section>
      )}
      {slider && slider.length < 2 && (
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
