import React from "react";
import "./sidebar.css";
import aboutMeFoto from "../../images/me_kissing_sloth.jpg";

const Sidebar = () => {
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
          <li className="sidebarListItem">Slow Life</li>
          <li className="sidebarListItem">Food</li>
          <li className="sidebarListItem">Sex&Breading</li>
          <li className="sidebarListItem">Protection</li>
          <li className="sidebarListItem">Habitat</li>
          <li className="sidebarListItem">Become a SLOTH!</li>
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
