import React from "react";

//sections
import HeaderNav from "../sections/HeaderNav";

//components
import SmallCardMusic from "../components/SmallCardMusic";

//images
import coverOne from "../images/coverCard.jpeg";
import playIcon from "../images/playIcon.svg";
import heartIcon from "../images/heartIcon.svg";

const CurrCardInfo = () => {
  return (
    <>
      <HeaderNav isSearch={true} />
      <section className="currCardInfo">
        <div className="container">
          <div className="currCardInfo__grid">
            <div className="currCardInfo__info">
              <div className="currCardInfo__info--image">
                <img src={coverOne} alt="" />
              </div>
              <div className="currCardInfo__info--text">
                <div className="currCardInfo__info--header">
                  <span>
                    Альбом: <span>Альбом</span>
                  </span>
                  <span>жанр • 2000</span>
                </div>
                <div className="currCardInfo__info--middle">
                  <h1 className="title1">Название</h1>
                  <span>
                    Исполнитель:
                    <span> Исполнитель</span>
                  </span>
                </div>
                <div className="currCardInfo__info--footer">
                  <button>
                    <img src={playIcon} alt="" />
                    слушать
                  </button>
                  <button>
                    <img src={heartIcon} alt="" />
                    нравится
                  </button>
                </div>
              </div>
            </div>
            <div className="currCardInfo__text">
              <p>Текст</p>
            </div>
            <div className="currCardInfo__similar">
              <div className="currCardInfo__similar--title">
                <h2 className="title2">Похожее</h2>
              </div>
              <ul className="currCardInfo__list">
                <SmallCardMusic />
                <SmallCardMusic />
                <SmallCardMusic />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CurrCardInfo;
