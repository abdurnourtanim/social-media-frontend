import React from "react";
import img1 from "../assets/post/3.jpeg";
import img2 from "../assets/post/7.jpeg";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import "../styles/profile.css";

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={img1} alt="post" />
              <img className="profileUserImg" src={img2} alt="post" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Jone Doe</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
