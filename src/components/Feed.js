import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Feed.css";
import Post from "./Post";
import Share from "./Share";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/62655d782e59d6a7e8e02af1");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
