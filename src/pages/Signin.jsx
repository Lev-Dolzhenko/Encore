import React from "react";

//sections
import HeaderNav from "../sections/HeaderNav";

//images
import coverSignin from "../images/coverSignin.jpeg";

const Signin = () => {
  return (
    <>
      <HeaderNav />;
      <section className="signin">
        <div className="container">
          <div className="signin__wrapper">
            <div className="login__image">
              <img src={coverSignin} alt="" />
            </div>
            <form className="signin__form">
              <label htmlFor="login">
                <h1 className="title1">регистрация</h1>
              </label>
              <div className="signin__form--inputs">
                <input id="login" type="text" placeholder="имя пользователя" />
                <input type="email" placeholder="e-mail" />
                <input type="text" placeholder="любимый жанр" />
                <input type="email" placeholder="любимый трек" />
                <textarea rows={7} placeholder="обо мне"></textarea>
                <input type="password" placeholder="пароль" />
                <input type="password" placeholder="повтоить пароль" />
              </div>
              <div className="signin__form--button">
                <button>войти</button>
              </div>
              <span>
                зарегистрированы? <a href="#!">войти</a>
              </span>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
