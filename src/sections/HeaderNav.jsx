import React from "react";

//images
import logotypeIcon from "../images/logotypeHeader.svg";
import accIcon from "../images/accIconHeader.svg";
import searchIcon from "../images/searchIconHeader.svg";

const HeaderNav = ({ isSearch = false }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logotype">
            <a href="#!">
              <img src={logotypeIcon} alt="Encore" />
            </a>
          </div>
          {isSearch && (
            <div className="header__search">
              <label htmlFor="searchMusic">
                <img src={searchIcon} alt="search" />
              </label>
              <input id="searchMusic" placeholder="поиск" type="text" />
            </div>
          )}
          <div className="header__acc">
            <button>
              <img src={accIcon} alt="account" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
