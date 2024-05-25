import React from "react";

//images
import currProfileCover from "../images/coverProfileCurr.jpeg";

const CurrProfile = () => {
  return (
    <section className="profile__curr">
      <div className="container">
        <div className="profile__curr--wrapper">
          <div className="profile__curr--image">
            <img src={currProfileCover} alt="current profile cover" />
          </div>
          <div className="profile__curr--info">
            <div className="profile__curr--info__name">
              <h1 className="title1">Петр Петрович</h1>
              <span className="profile__curr--info__email">
                email@gmail.com
              </span>
            </div>
            <div className="profile__curr--info__about">
              <strong>обо мне</strong>
              <p>
                текст. текст. текст. текст. текст. текст.текст. текст. текст.
              </p>
            </div>
            <div className="profile__curr--info__music">
              <strong>музыкальные вкусы</strong>
              <div className="profile__curr--info__music--buttons">
                <button>любимый жанр 1</button>
                <button>любимый жанр 2</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrProfile;
