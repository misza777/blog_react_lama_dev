import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./topbar.css";
import profileFoto from "../../images/sloth-image.jpg";
// import facebookIcon from "../../images/icons/facebook-icon_64.svg";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });

  };
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
          <li>
            <NavLink className="topListItem" to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className="topListItem" to="/about">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink className="topListItem " to="/contact">
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink className="topListItem " to="/write">
              WRITE
            </NavLink>
          </li>
          <li>
            <NavLink className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={profileFoto} alt="profile sloth" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="fas fa-search topSearchIcon"></i>
      </div>
    </div>
  );
};

export default Topbar;
