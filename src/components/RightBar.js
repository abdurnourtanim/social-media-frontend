import React from "react";
import img2 from "../assets/ad.png";
import img from "../assets/gift.png";
import "../styles/rightBar.css";

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
          <li className="rightbarFriend"></li>
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
