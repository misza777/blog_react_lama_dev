import React from "react";
import "./singleFullPost.css";

const SingleFullPost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://cdn.pixabay.com/photo/2020/04/14/16/09/sloth-5043324_1280.png"
          alt=""
        />
        <h1 className="singlePostTitle">
          Cupsloth ipsum dolor sit amet tart dragée cotton.
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author: <b className="singlePostAuthor">Great Sloth Lover</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
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
        </p>
      </div>
    </div>
  );
};

export default SingleFullPost;
