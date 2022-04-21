import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/topbar.css";
import TopBarIcon from "./TopBarIcon";

const TopBar = () => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" className="logo">
          Lamasocial
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <TopBarIcon text={9} icon={Person} />
          <TopBarIcon text={9} icon={Chat} />
          <TopBarIcon text={9} icon={Notifications} />
        </div>
        <img
          src={`${publicFolder + `person/1.jpeg`}`}
          alt="profile"
          className="topbarImg"
        />
      </div>
    </div>
  );
};

export default TopBar;
