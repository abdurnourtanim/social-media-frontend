import React from "react";
import "../styles/rightBar.css";

const RightBarFollowingFriend = ({ name, img }) => {
  return (
    <div className="rightbarFollowing">
      <img src={img} alt="profile" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName">{name}</span>
    </div>
  );
};

export default RightBarFollowingFriend;
