import React from "react";

//images
import wavesIcon from "../images/musicWaves.svg";
import heartIcon from "../images/heartIcon.svg";
import coverCard from "../images/coverCard.jpeg";
import playIcon from "../images/playIcon.svg";

const CardMusic = ({ isCurr }) => {
  return (
    <div className={`catalog__item ${isCurr && 'catalog__item--curr'}`}>
      <div className="catalog__item--header">
        <img src={wavesIcon} alt="waves" />
        <button>
          <img src={heartIcon} alt="like" />
        </button>
      </div>
      <div className="catalog__item--image">
        <div className="catalog__item--image__wrapper">
          <img className="catalog__item--image__wrapper--cover" src={coverCard} alt="cover" />
          <button>
            <img src={playIcon} alt="play" />
          </button>
        </div>
        {!isCurr && (
          <ul className="catalog__item--genres">
            <li className="catalog__item--genre">жанр,</li>
            <li className="catalog__item--genre">жанр,</li>
            <li className="catalog__item--genre">жанр</li>
          </ul>
        )}
      </div>
      {!isCurr && (
        <div className="catalog__item--footer">
          <div className="catalog__item--name">
            <strong>название</strong>
            <span>группа</span>
          </div>
          <div className="catalog__item--year">
            <span>2000 год</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardMusic;
