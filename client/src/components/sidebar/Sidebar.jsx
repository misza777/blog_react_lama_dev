import React, { useState, useEffect } from "react";
import "./sidebar.css";
import aboutMeFoto from "../../images/me_kissing_sloth.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios("/categories");
      // console.log(res.data);
      setCats(res.data);
    };
    fetchCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={aboutMeFoto} alt="me kissing sloth" />
        <p>
          This is blog for Sloth lovers. Discover more about the Sloth, their
          lifestyle, habits, the issues and threats they are facing. You can
          express your admiration and love to those unique animals too...
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?category=${c.name}`} className="link" key={c._id}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
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
      </div>
    </div>
  );
};

export default Sidebar;
