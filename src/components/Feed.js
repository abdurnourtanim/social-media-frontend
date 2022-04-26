import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Feed.css";
import Post from "./Post";
import Share from "./Share";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/62681cf903923454f8a4ec45");
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
