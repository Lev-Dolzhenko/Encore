import React from "react";

//sections
import HeaderNav from "../sections/HeaderNav";

//images
import cover from "../images/coverLogin.jpeg";

const Login = () => {
  return (
    <>
      <HeaderNav />;
      <section className="login">
        <div className="container">
          <div className="login__wrapper">
            <div className="login__image">
              <img src={cover} alt="" />
            </div>
            <form className="login__form">
              <label htmlFor="login">
                <h1 className="title1">вход</h1>
              </label>
              <div className="login__form--inputs">
                <input id="login" type="email" placeholder="введите е-mail" />
                <input type="password" placeholder="введите пароль" />
              </div>
              <div className="login__form--button">
                <button>войти</button>
              </div>
              <span>
                еще нет аккаунта? <a href="#!">зарегистрироваться</a>
              </span>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
