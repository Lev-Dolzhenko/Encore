import React from "react";

//sections
import CatalogList from "../sections/CatalogList";
import HeaderNav from "../sections/HeaderNav";

const CatalogChart = () => {
  return (
    <>
      <HeaderNav isSearch={true} />
      <CatalogList isChart={true} />
    </>
  );
};

export default CatalogChart;
