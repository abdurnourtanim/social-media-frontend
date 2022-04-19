import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@material-ui/icons";
import React from "react";
import "../styles/sidebar.css";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <SidebarList text="Feed" icon={RssFeed} />
          <SidebarList text="Chats" icon={Chat} />
          <SidebarList text="Videos" icon={PlayCircleFilledOutlined} />
          <SidebarList text="Groups" icon={Group} />
          <SidebarList text="Bookmarks" icon={Bookmark} />
          <SidebarList text="Questions" icon={HelpOutline} />
          <SidebarList text="Jobs" icon={WorkOutline} />
          <SidebarList text="Events" icon={Event} />
          <SidebarList text="Courses" icon={School} />
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {/* {Users.map((u) => (
          <CloseFriend key={u.id} user={u} />
        ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
