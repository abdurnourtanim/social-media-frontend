import React from "react";
import img2 from "../assets/ad.png";
import img from "../assets/gift.png";
import { Users } from "../fakeData";
import "../styles/rightBar.css";
import ActiveFriend from "./ActiveFriend";
import RightBarFollowingFriend from "./RightBarFollowingFriend";

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={img} alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src={img2} alt="" />
        <h4 className="rightbarTitle">Active Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <ActiveFriend key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <RightBarFollowingFriend name="John Doe" img="assets/person/1.jpeg" />
          <RightBarFollowingFriend name="John Doe" img="assets/person/2.jpeg" />
          <RightBarFollowingFriend name="John Doe" img="assets/person/3.jpeg" />
          <RightBarFollowingFriend name="John Doe" img="assets/person/4.jpeg" />
          <RightBarFollowingFriend name="John Doe" img="assets/person/5.jpeg" />
          <RightBarFollowingFriend name="John Doe" img="assets/person/6.jpeg" />
          <RightBarFollowingFriend name="John Doe" img="assets/person/7.jpeg" />
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
