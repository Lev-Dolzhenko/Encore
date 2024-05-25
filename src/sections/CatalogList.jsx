import React from "react";
import CardMusic from "../components/CardMusic";

const CatalogList = ({ isChart = false }) => {
  return (
    <div className="container">
      <div className="catalog__wrapper">
        {isChart && (
          <div className="catalog--chart__title">
            <h1 className="title1">чарт</h1>
          </div>
        )}
        <div className="catalog__list">
          <CardMusic />
          <CardMusic />
          <CardMusic />
          <CardMusic />
          <CardMusic />
          <CardMusic />
          <CardMusic />
          <CardMusic />
          <CardMusic />
          <CardMusic />
        </div>
      </div>
    </div>
  );
};

export default CatalogList;
