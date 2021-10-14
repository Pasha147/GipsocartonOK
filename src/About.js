import React, { useState, useEffect } from "react";

const About = ({ about }) => {
  const [position, setPosition] = useState(0);
  const [z, setZ] = useState(["0", "1", "0"]);

  let posL = { top: "0", left: "-50%", opacity: "0", zIndex: "0" };
  let posT = { top: "-50%", left: "0", opacity: "0", zIndex: "0" };
  let posR = { top: "20%", right: "-50%", opacity: "0", zIndex: "0" };
  if (position === 1) {
    posL = { top: "0", left: "0", opacity: "100%", zIndex: z[0] };
    posT = { top: "15%", left: "-2%", opacity: "100%", zIndex: z[1] };
    posR = { top: "5%", right: "3%", opacity: "100%", zIndex: z[2] };
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPosition(1);
    }, 100);
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
          onClick={() => {
            setZ(["0", "1", "2"]);
          }}
        />
        <img
          className="about__img"
          style={posT}
          src={about.image[0]}
          alt={about.title}
          onClick={() => {
            setZ(["0", "1", "0"]);
          }}
        />
        <img
          className="about__img"
          style={posL}
          src={about.image[1]}
          alt={about.title}
          onClick={() => {
            setZ(["2", "1", "0"]);
          }}
        />
      </div>
      <div className="about__textCont">
        <h2>{about.h2}</h2>
        {about.p.map((text, index) => {
          return <p key={index}>&emsp;{text}</p>;
        })}
      </div>
    </div>
  );
};

export default About;
