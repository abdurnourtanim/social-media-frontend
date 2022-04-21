import React from "react";
import "../styles/closeFriends.css";

const CloseFriend = ({ user }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={publicFolder + user.profilePicture}
        alt="profileImg"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
