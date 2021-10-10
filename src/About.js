import React, { useState, useEffect } from "react";

const About = ({ about }) => {
  const [position, setPosition] = useState(0);
  let posL = { top: "0", left: "-100%", opacity: "0" };
  let posT = { top: "-100%", left: "0", opacity: "0" };
  let posR = { top: "20%", left: "100%", opacity: "0" };
  if (position === 1) {
    posL = { top: "-3%", left: "-10%", opacity: "90%" };
    posT = { top: "15%", left: "-3%", opacity: "100%" };
    posR = { top: "0", left: "45%", opacity: "100%" };
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPosition(1);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="about">
      <div className="about__imgCont">
        <img
          className="about__img"
          style={posR}
          src={about.image[2]}
          alt={about.title}
        />
        <img
          className="about__img"
          style={posT}
          src={about.image[0]}
          alt={about.title}
        />
        <img
          className="about__img"
          style={posL}
          src={about.image[1]}
          alt={about.title}
        />
      </div>
      <div className="about__textCont">
        <h2>
          Компания ГипсокартонПро предосталяет услуги монтажа гипсокартонных
          конструкций любой сложности
        </h2>
        <p>
          &emsp; Наши гипсокартонщики предоставляют услуги по монтажу
          гипсокартона. Мы профессионально смонтируем потолки, перегородки,
          фальшстены, откосы, ниши под карниз, ниши под подсветку и т.д.
        </p>
        <p>
          &emsp; У нас достаточно большой опыт работы в монтаже гипсокартона.
          Гипсокартонные работы проводим по технологии, это даёт гарантию
          надёжности наших гипсокартонных конструкций. Также мы можем
          предоставить услуги по выбору материалов для качественного монтажа
          гипсокартона. А также можем организовать доставку материалов на
          объект.
        </p>
      </div>
    </div>
  );
};

export default About;
