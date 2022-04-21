import React from "react";
import img2 from "../assets/ad.png";
import img from "../assets/gift.png";
import { Users } from "../fakeData";
import "../styles/rightBar.css";
import ActiveFriend from "./ActiveFriend";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src={img} alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src={img2} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <ActiveFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
