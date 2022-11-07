import React, { useEffect, useState, useContext } from "react";
import "./singleFullPost.css";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const SingleFullPost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});

  //public folder photo
  const PF = "http://localhost:2000/images/";

  //context
  const { user } = useContext(Context);

  //update
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // w useEffect jest "posts" bo tak jest skonfigurowany server
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${path}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
      console.log(path);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.patch(`/posts/${path}`, { username: user.username, title, desc },
      );
      // window.location.reload();
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {user && post.username === user.username && (
              <div className="singlePostEdit">
                <FaEdit
                  className="singlePostIcon"
                  onClick={() => setUpdateMode(true)}
                />
                <FaTrash className="singlePostIcon" onClick={handleDelete} />
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b className="singlePostAuthor">
                {/* Great Sloth Lover */}
                {post.username}
              </b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            value={desc}
            className="singlePostDescInput"
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleFullPost;
