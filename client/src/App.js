import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./css/reset.css";
// import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import SinglePost from "./pages/singlePost/SinglePost";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const user = false;
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post/:postId" element={<SinglePost />}></Route>
        <Route
          path="/write"
          element={user ? <Write /> : <Navigate to="/register" />}
        ></Route>
        <Route
          path="/settings"
          element={user ? <Settings /> : <Navigate to="/register" />}
        ></Route>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
