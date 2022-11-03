import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      username: "",
      title: "",
      desc: "",
      photo: "",
      categories: [],
      createdAt: "",
      updatedAt: "",
      _id: "",
    },
  ]);
  //useEffect abort with axios not necessery but good practice
  const cancelToken = axios.CancelToken.source();
  // search posts by user: ?user=... ?category=...
  const { search } = useLocation();
  console.log(search);
  //useeffect
  useEffect(() => {
    const fetchPosts = async () => {
      await axios
        .get("/posts" + search, { cancelToken: cancelToken.token })
        .then((res) => {
          setPosts(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("axios cancelled fetching data!");
          }
        });
    };

    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        {posts.length !== 0 ? (
          <Posts posts={posts} />
        ) : (
          <Navigate to="/notfound" />
        )}
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
