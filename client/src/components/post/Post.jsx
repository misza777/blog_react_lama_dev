import React from "react";
import "./post.css";

const Post = (props) => {
  return (
    <div className="post">
      <img className="postImg" src={props.img} alt="anoter lovely sloth" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Food</span>
          <span className="postCat">Sex&Breeding</span>
        </div>
        <span className="postTitle">I love SlOtHs!</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Sugar plum sloth
        brownie halvah wafer lollipop jelly-o pastry. Gingerbread gingerbread
        jelly I love lemon drops danish. Candy I love gummies brownie sesame
        snaps. Bear claw cookie jelly-o sweet roll choc Slothe bar lemon drops.Cupsloth ipsum dolor sit amet tart dragée cotton candy. 
        I love dragée tootsie roll oat sloth jelly beans cookie cotton candy
        muffin. Slothe bar liquorice I love tart wafer. Liquorice candy tootsie
        roll caramels carrot sloth Slothe sloth lemon drops. Lemon drops sesame
        snaps oat sloth lemon drops pastry croissant biscuit. Slothe bar
        liquorice I love tart wafer. Liquorice candy tootsie roll caramels
        carrot sloth Slothe sloth lemon drops. Lemon drops sesame snaps oat
        sloth lemon drops pastry croissant biscuit. Slothe bar liquorice I love
        tart wafer. Liquorice candy tootsie roll caramels carrot sloth Slothe
        sloth lemon drops. Lemon drops sesame snaps oat sloth lemon drops pastry
        croissant biscuit.
      </p>
    </div>
  );
};

export default Post;
