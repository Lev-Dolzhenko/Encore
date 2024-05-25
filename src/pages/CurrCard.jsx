import React from "react";

//sections
import HeaderNav from "../sections/HeaderNav";
import CardMusic from "../components/CardMusic";

const CurrCard = () => {
  return (
    <>
      <HeaderNav isSearch={true} />
      <section className="curr">
        <div className="container">
          <div className="curr__wrapper">
            <CardMusic isCurr={true} />
            <div className="curr__info">
              <ul className="curr__list">
                <li className="curr__item">название</li>
                <li className="curr__item">исполнитель</li>
                <li className="curr__item">длительность</li>
                <li className="curr__item">к-во прослушиваний</li>
                <li className="curr__item">описание трека</li>
                <li className="curr__item">связанные трека</li>
                <li className="curr__item">текст</li>
                <li className="curr__item">-кнопочка прослушать</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CurrCard;
