import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SingleFullPost from "../../components/singleFullPost/SingleFullPost";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="single">
      <SingleFullPost />
      <Sidebar />
    </div>
  );
};

export default SinglePost;
