import React from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account
          <i className="settingsPPIcon fa fa-trash"  aria-hidden="true"></i></span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://st2.depositphotos.com/5909840/8643/i/450/depositphotos_86439982-stock-photo-happy-sloth.jpg"
              alt="happy sloth"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input className="hidden" type="file" id="fileInput" />
          </div>
          <label>Username</label>
          <input type="text" placeholder="sloth" />
          <label>Email</label>
          <input type="email" name="email" placeholder="sloth@sloth.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <buttn className="settingsSubmitButton">Update</buttn>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
