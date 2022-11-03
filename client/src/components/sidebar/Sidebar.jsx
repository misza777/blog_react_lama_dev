import React, { useState, useEffect } from "react";
import "./sidebar.css";
import aboutMeFoto from "../../images/me_kissing_sloth.jpg";
import axios from "axios";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios("/categories");
      console.log(res.data)
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          laboriosam consequuntur voluptatibus cupiditate porro ipsa nam,
          reiciendis quas culpa in.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem" key={c._id}>
              {c.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
