import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import React from "react";
import img from "../assets/person/1.jpeg";
import "../styles/share.css";
import ShareOption from "./ShareOption";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={img} alt="profile" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <ShareOption
              text="Photo or Video"
              icon={PermMedia}
              color="tomato"
            />
            <ShareOption text="Tag" icon={Label} color="blue" />
            <ShareOption text="Location" icon={Room} color="green" />
            <ShareOption
              text="Feelings"
              icon={EmojiEmotions}
              color="goldenrod"
            />
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
