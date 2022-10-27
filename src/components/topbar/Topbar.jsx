import React from "react";
import "./topbar.css";
import profileFoto from "../../images/sloth-image.jpg";
// import facebookIcon from "../../images/icons/facebook-icon_64.svg";

const Topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        {/* <span class="material-icons md-24">facebook</span> */}
        {/* <img
          src={facebookIcon}
          alt="facebook icon"
        /> */}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem ">HOME</li>
          <li className="topListItem ">ABOUT</li>
          <li className="topListItem ">CONTACT</li>
          <li className="topListItem ">WRITE</li>
          <li className="topListItem ">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src={profileFoto} alt="profile sloth" />
        <i className="fas fa-search topSearchIcon"></i>
      </div>
    </div>
  );
};

export default Topbar;
