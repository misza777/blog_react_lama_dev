import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { FaSearch } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:2000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    window.location.replace("/login");
  };

  return (
    <div className="top">
      <div className="topLeft">
        <FaFacebookSquare className="topIcon" />
        <FaTwitterSquare className="topIcon" />
        <FaPinterestSquare className="topIcon" />
        <FaInstagramSquare className="topIcon" />
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
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="profile" />
          </Link>
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
        {/* <i className="fas fa-search topSearchIcon"></i> */}
        <FaSearch className="topSearchIcon" />
      </div>
    </div>
  );
};

export default Topbar;
