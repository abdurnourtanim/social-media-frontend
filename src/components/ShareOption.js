import React from "react";
import "../styles/share.css";

const ShareOption = ({ text, color, icon: Icon }) => {
  return (
    <div className="shareOption">
      <Icon htmlColor={color} className="shareIcon" />
      <span className="shareOptionText">{text}</span>
    </div>
  );
};

export default ShareOption;
