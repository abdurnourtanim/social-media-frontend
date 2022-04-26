import axios from "axios";
import React, { useEffect, useState } from "react";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import "../styles/profile.css";

const Profile = () => {
  const [user, setUser] = useState({});
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(async () => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=antanim`);
      setUser(res.data);
      console.log(res.data);
    };
    fetchUser();
  }, []);
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture || `${PUBLIC_FOLDER + "person/noCover.png"}`
                }
                alt="cover"
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture ||
                  `${PUBLIC_FOLDER + "person/noAvatar.png"}`
                }
                alt="profile"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="antanim" />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
