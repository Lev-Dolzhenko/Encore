import React from "react";

//sections
import HeaderNav from "../sections/HeaderNav";
import CatalogList from "../sections/CatalogList";

const Catalog = () => {
  return (
    <>
      <HeaderNav isSearch={true} />
      <CatalogList />
    </>
  );
};

export default Catalog;
