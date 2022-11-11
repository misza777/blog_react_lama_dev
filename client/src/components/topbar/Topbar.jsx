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
import { FaUserEdit } from "react-icons/fa";

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
        <a
          href="https://www.facebook.com/groups/ilovesloths"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaFacebookSquare className="topIcon" />
        </a>
        <a
          href="https://twitter.com/search?q=sloth&src=typed_query"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaTwitterSquare className="topIcon" />
        </a>
        <a
          href="https://www.pinterest.com/search/pins/?q=sloth&rs=typed"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaPinterestSquare className="topIcon" />
        </a>
        <a
          href="https://www.instagram.com/explore/tags/sloth/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaInstagramSquare className="topIcon" />
        </a>
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
          {user.profilePic.length!==0 ? (      
            <img className="topImg" src={PF + user.profilePic} alt="profile" />):(
              <FaUserEdit className="topImg" />
            )}
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
