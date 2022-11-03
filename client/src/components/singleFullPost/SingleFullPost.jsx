import React, { useEffect, useState } from "react";
import "./singleFullPost.css";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

const SingleFullPost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});

  // w useEffect jest "posts" bo tak jest skonfigurowany server
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src="post.photo" alt="" />
        )}
        {/* https://cdn.pixabay.com/photo/2020/04/14/16/09/sloth-5043324_1280.png */}
        <h1 className="singlePostTitle">
          {/* Cupsloth ipsum dolor sit amet tart dragée cotton. */} {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash"></i>
          </div>
        </h1>
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
        <p className="singlePostDesc">
          {post.desc}
          {/* Sugar plum sloth brownie halvah wafer lollipop jelly-o pastry.
          Gingerbread gingerbread jelly I love lemon drops danish. Candy I love
          gummies brownie sesame snaps. Bear claw cookie jelly-o sweet roll choc
          Slothe bar lemon drops.Cupsloth ipsum dolor sit amet tart dragée
          cotton candy. I love dragée tootsie roll oat sloth jelly beans cookie
          cotton candy muffin. Slothe bar liquorice I love tart wafer. Liquorice
          candy tootsie roll caramels carrot sloth Slothe sloth lemon drops.
          Lemon drops sesame snaps oat sloth lemon drops pastry croissant
          biscuit. Slothe bar liquorice I love tart wafer. Liquorice candy
          tootsie roll caramels carrot sloth Slothe sloth lemon drops. Lemon
          drops sesame snaps oat sloth lemon drops pastry croissant biscuit.
          Slothe bar liquorice I love tart wafer. Liquorice candy tootsie roll
          caramels carrot sloth Slothe sloth lemon drops. Lemon drops sesame
          snaps oat sloth lemon drops pastry croissant biscuit.
        </p>
        <p className="singlePostDesc">
          Sugar plum sloth brownie halvah wafer lollipop jelly-o pastry.
          Gingerbread gingerbread jelly I love lemon drops danish. Candy I love
          gummies brownie sesame snaps. Bear claw cookie jelly-o sweet roll choc
          Slothe bar lemon drops.Cupsloth ipsum dolor sit amet tart dragée
          cotton candy. I love dragée tootsie roll oat sloth jelly beans cookie
          cotton candy muffin. Slothe bar liquorice I love tart wafer. Liquorice
          candy tootsie roll caramels carrot sloth Slothe sloth lemon drops.
          Lemon drops sesame snaps oat sloth lemon drops pastry croissant
          biscuit. Slothe bar liquorice I love tart wafer. Liquorice candy
          tootsie roll caramels carrot sloth Slothe sloth lemon drops. Lemon
          drops sesame snaps oat sloth lemon drops pastry croissant biscuit.
          Slothe bar liquorice I love tart wafer. Liquorice candy tootsie roll
          caramels carrot sloth Slothe sloth lemon drops. Lemon drops sesame
          snaps oat sloth lemon drops pastry croissant biscuit.
        */}
        </p>
      </div>
    </div>
  );
};

export default SingleFullPost;
