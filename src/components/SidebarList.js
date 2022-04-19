import React from "react";
import "../styles/sidebar.css";

const SidebarList = ({ text, icon: Icon }) => {
  return (
    <li className="sidebarListItem">
      <Icon className="sidebarIcon" />
      <span className="sidebarListItemText">{text} </span>
    </li>
  );
};

export default SidebarList;
