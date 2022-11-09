import React, { useContext, useState } from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaUserCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Context } from "../../context/Context";
import axios from "axios";
import Alert from "@mui/material/Alert";

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:2000/images/";

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      //preventing from uploading same file name
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.patch("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "UPDATE_FAILURE" });
      setError(true);
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">
            Delete Account
            <FaTrash className="settingsPPIcon" aria-hidden="true"></FaTrash>
          </span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt="happy slot user profile"
            />
            <label htmlFor="fileInput">
              <FaUserCircle className="settingsPPIcon"></FaUserCircle>
            </label>
            <input
              className="hidden"
              type="file"
              id="fileInput"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success &&
            (setTimeout(() => setSuccess(false), 5000),
            (
              <Alert severity="success" className="error">
                User profile has been updated ... To see changes please login
                again.
              </Alert>
            ))}
          {error &&
            (setTimeout(() => setError(false), 5000),
            (
              <Alert severity="error" className="error">
                Such username or email is already taken, all fields are required
                so please try again ...
              </Alert>
            ))}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
