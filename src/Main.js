import React, { useState } from "react";
import data from "./menu.js";

const Main = () => {
  const [curItem, setCurItem] = useState(0);
  const { title, image, text } = data[curItem];
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
      <section>
        <h3>{title}</h3>
        <img className="sectionImg" src={image} alt={title} />
        <p>{text}</p>
      </section>
    </main>
  );
};

export default Main;
