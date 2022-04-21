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
import { Users } from "../fakeData";
import "../styles/sidebar.css";
import CloseFriend from "./CloseFriend";
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
          {Users.map((user) => (
            <CloseFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
