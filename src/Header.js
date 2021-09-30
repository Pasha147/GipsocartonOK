import React from "react";

const Header = () => {
  return (
    <header>
      <div className="headInfo">
        <div className="headInfo__logo">
          <img src="../img/logo.bmp" alt="logo" />
        </div>
        <div className="headInfo__title">
          <h1>ГипсокартонOK</h1>
        </div>
        <div className="headInfo__contacts">
          <div className="contacts__tel">
            <p>(093)333-33-33</p>
          </div>
          <div className="contacts__email">
            <p>gipsok@ukr.net</p>
          </div>
          <div className="contacts__skype">
            <p>skype_gipsok</p>
          </div>
          <div className="contacts__tel">
            <p>(093)333-33-33</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
