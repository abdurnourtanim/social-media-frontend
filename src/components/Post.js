import { MoreVert } from "@material-ui/icons";
import React from "react";
import img4 from "../assets/heart.png";
import img3 from "../assets/like.png";
import img from "../assets/person/1.jpeg";
import img2 from "../assets/post/1.jpeg";
import "../styles/post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={img} alt="profile" />
            <span className="postUsername">John Doe</span>
            <span className="postDate">{new Date().toLocaleDateString}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam
            quibusdam, iste similique eos, excepturi ad ipsa at sunt
            reprehenderit sed. Nostrum pariatur explicabo illum nihil,
            distinctio ipsam dolores quam.
          </span>
          <img className="postImg" src={img2} alt="post-img" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={img3} alt="" />
            <img className="likeIcon" src={img4} alt="" />
            <span className="postLikeCounter">100 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">91 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
