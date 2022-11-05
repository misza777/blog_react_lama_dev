import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  const PF = "http://localhost:2000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImg"
          src={PF + post.photo}
          alt="another lovely sloth"
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c, index) => (
            <span className="postCat" key={index}>
              {c.name}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
