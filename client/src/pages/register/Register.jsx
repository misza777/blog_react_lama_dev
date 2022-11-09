import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
      res.data && window.location.replace("/login");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          name="username"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          name="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          name="pasword"
          placeholder="Enter your password ..."
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error &&
        (setTimeout(() => setError(false), 5000),
        (
          <Alert severity="error" className="error">
            Something went wrong! Such user or email is taken so please try
            again ...
          </Alert>
        ))}
    </div>
  );
};

export default Register;
