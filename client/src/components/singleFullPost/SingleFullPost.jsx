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
  const [cat, setCat] = useState([]);
  const [newCat, setNewCat] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // w useEffect jest "posts" bo tak jest skonfigurowany server
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setCat(res.data.categories);
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
    const updatedPost = {
      username: user.username,
      title,
      desc,
      categories: newCat.split(","),
    };

    const newCategories = newCat.split(",");

    try {
      await axios.patch(`/posts/${path}`, updatedPost);
      // window.location.reload();

      if (newCategories.length > 0) {
        newCategories.forEach(async (cat) => {
          const newCat = {
            name: cat,
          };
          try {
            await axios.post("/categories", newCat);
          } catch (error) {
            console.log(error);
          }
        });
      }

      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            className="singlePostImg"
            src={PF + post.photo}
            alt="post hero"
          />
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
          <span className="singlePostAuthorContainer">
            Author:
            <Link to={`/?user=${post.username}`} className="link authorLink">
              <b className="singlePostAuthor">{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        {updateMode ? (
          <input
            type="text"
            placeholder={cat && cat.join(",")}
            className="singlePostTitleInput"
            onChange={(e) => setNewCat(e.target.value)}
          />
        ) : (
          post.categories && (
            <span className="categories">
              Categories:
              {post.categories.map((c, i) => (
                <Link key={i} to={`/?category=${c}`} className="link">
                  <span className="singlePostCategory">{c}</span>
                </Link>
              ))}
            </span>
          )
        )}
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
