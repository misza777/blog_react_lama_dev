import React from "react";
import { Routes, Route } from "react-router-dom";
import "./css/reset.css";
// import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import SinglePost from "./pages/singlePost/SinglePost";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/singlepost" element={<SinglePost />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
