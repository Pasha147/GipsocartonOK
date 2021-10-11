import React, { useState } from "react";
import data from "./menu.js";
import Slider from "./Slider";
import About from "./About";

import {
  // FaRegEnvelope,
  FaPhoneAlt,
  FaEnvelope,
  // FaFacebook,
  FaPaperPlane,
} from "react-icons/fa";
import { BsSkype } from "react-icons/bs";

const Main = () => {
  const [curItem, setCurItem] = useState(0);
  let slider = data[curItem].slider;
  let { about, services, contacts } = data[curItem];

  // console.log(contacts);

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
      {services && (
        <section className="sectionCenter">
          <article>
            <h3>{data[curItem].title1}</h3>
            <ul className="services">
              {data[curItem].services.map((item, index) => {
                return (
                  <li key={index}>
                    <h4>{item.title}</h4>
                    <p>&emsp;{item.text}</p>
                    <div className="services__underlineCont">
                      <div className="services__underline"></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
      )}

      {contacts && (
        <section className="sectionCenter">
          <article>
            <h3>Расположение офиса компании</h3>
            <img
              className="sliderImg"
              src={contacts.image}
              alt={contacts.title}
            />
            <h3>Директор: Серега</h3>
            <div className="headInfo__contacts">
              <div className="contacts__item tel">
                <FaPhoneAlt />
                <span> (093)333-33-33</span>
              </div>
              <div className="contacts__item email">
                <FaEnvelope />
                <span> gipsok@ukr.net</span>
              </div>
              <div className="contacts__item skype">
                <BsSkype />
                <span> skype_gipsok</span>
              </div>
              <div className="contacts__item tel">
                <FaPaperPlane />
                <span> (093)333-33-33</span>
              </div>
            </div>
          </article>
        </section>
      )}

      {slider && slider.length < 2 && (
        <section className="sectionCenter">
          <article className="activeSlide">
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
