import React from "react";
import "../styles/topbar.css";

const TopBarIcon = ({ text, icon: Icon }) => {
  return (
    <div className="topbarIconItem">
      <Icon />
      <span className="topbarIconBadge">{text}</span>
    </div>
  );
};

export default TopBarIcon;
