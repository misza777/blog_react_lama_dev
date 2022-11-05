import React from "react";
import Post from "../post/Post";
import "./posts.css";
import { v4 as uuidv4 } from "uuid";

const Posts = ({ posts }) => {
  
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={uuidv4()} />
      ))}
      {/* <Post img=" />
      <Post img="https://images.pexels.com/photos/4484954/pexels-photo-4484954.jpeg?cs=srgb&dl=pexels-roxanne-minnish-4484954.jpg&fm=jpg" />
      <Post img="https://images.pexels.com/photos/13528484/pexels-photo-13528484.jpeg?cs=srgb&dl=pexels-gustavo-salazar-13528484.jpg&fm=jpg" />
      <Post img="https://images.unsplash.com/photo-1580851168432-9fcec61cf2c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" /> */}
    </div>
  );
};

export default Posts;
