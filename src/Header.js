import React from "react";

import { BsSkype } from "react-icons/bs";
import {
  FaRegEnvelope,
  FaPhoneAlt,
  FaEnvelope,
  // FaFacebook,
  FaPaperPlane,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="headInfo">
      <div className="headInfo__logo">
        <img src="../img/logo.bmp" alt="logo" />
      </div>
      <div className="head__right">
        <div className="headInfo__title">
          <h1>ГипсокартонOK</h1>
        </div>
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
      </div>
    </header>
  );
};

export default Header;
