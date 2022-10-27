import "./header.css";
import profileImage from "../../images/sloth-1-image.jpg";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Sloth Life</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={profileImage} alt="profile sloth" />
    </div>
  );
};

export default Header;
