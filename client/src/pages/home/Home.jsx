import React, { useState, useEffect } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([]);
  //useEffect abort with axios not necessery but good practice
  const cancelToken = axios.CancelToken.source();
  // search posts by user: ?user=misza777
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      await axios
        .get("/posts" + search, { cancelToken: cancelToken.token })
        .then((res) => {
          console.log(res.data);
          setPosts(res.data);
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
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
