import React from "react";
import "../styles/Feed.css";
import Post from "./Post";
import Share from "./Share";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
