import React from "react";

//sections
import HeaderNav from "../sections/HeaderNav";

//images
import profileCover from "../images/coverProfile.jpeg";

const Profile = () => {
  return (
    <>
      <HeaderNav isSearch={true} />
      <section className="profile">
        <div className="container">
          <div className="profile__wrapper">
            <div className="profile__image">
              <img src={profileCover} alt="profile photo" />
            </div>
            <div className="profile__info">
              <div className="profile__info--name">
                <h2 className="title2">петр петрович</h2>
              </div>
              <ul className="profile__info--list">
                <li className="profile__info--item">обо мне</li>
                <li className="profile__info--item">музыкальные вкусы</li>
                <li className="profile__info--item">кол-во любимых треков</li>
                <li className="profile__info--item">любимый трек</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
