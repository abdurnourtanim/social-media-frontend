import React from "react";
import { Posts } from "../fakeData";
import "../styles/Feed.css";
import Post from "./Post";
import Share from "./Share";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
