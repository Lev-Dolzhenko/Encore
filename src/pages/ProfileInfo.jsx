import React from "react";

//sections
import HeaderNav from "../sections/HeaderNav";
import CurrProfile from "../sections/CurrProfile";
import SmallCardMusic from "../components/SmallCardMusic";

const ProfileInfo = () => {
  return (
    <>
      <HeaderNav isSearch={true} />
      <CurrProfile />
      <div className="container">
        <div className="profileInfo__title">
          <h1 className="title1">любимые</h1>
          <ul className="profileInfo__list">
            <SmallCardMusic />
            <SmallCardMusic />
            <SmallCardMusic />
            <SmallCardMusic />
            <SmallCardMusic />
            <SmallCardMusic />
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
