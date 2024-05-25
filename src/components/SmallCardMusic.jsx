import React from "react";

//images
import coverSmallCard from "../images/coverCard.jpeg";
import heartIcon from "../images/heartIcon.svg";

const SmallCardMusic = () => {
  return (
    <li className="profileInfo__item">
      <div className="profileInfo__item--image">
        <img src={coverSmallCard} alt="cover Small Card" />
      </div>
      <div className="profileInfo__item--name">
        <strong>название</strong>
        <span>группа</span>
      </div>
      <div className="profileInfo__item--like">
        <button>
          <img src={heartIcon} alt="heart Icon" />
        </button>
      </div>
      <div className="profileInfo__item--time">
        <span>00:00</span>
      </div>
    </li>
  );
};

export default SmallCardMusic;
