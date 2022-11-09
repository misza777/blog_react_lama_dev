import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import Alert from "@mui/material/Alert";

const Login = () => {
  //Context
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      // res.data && window.location.replace("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };

  //useRef hook
  const userRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          name="username"
          placeholder="Enter your username..."
          ref={userRef}
          required
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          name="pasword"
          placeholder="Enter your password ..."
          ref={passwordRef}
          required
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      {error &&
        (setTimeout(() => setError(false), 5000),
        (
          <Alert severity="error" className="error">
            User not found or wrong credentials, please try again ...
          </Alert>
        ))}
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
