import React from "react";
import { NavLink } from "react-router-dom";
import avatarimg from "../../images/demoUserImg.jpg";
import storyStyle from "../../styles/story.module.css";
import logo from "../../images/instaStorylogo.png";
import multyplysymbol from "../../images/multiplyicon.png";
import Avatar from "@material-ui/core/Avatar";
import YouTube from "react-youtube";

export default function Userstories(props) {
  const opts = {
    height: "350",
    width: "400",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className={storyStyle.ext_div}>
      <NavLink to="/">
        <img className={storyStyle.logo} alt="..." src={logo}></img>
      </NavLink>
      <NavLink to="/">
        <img className={storyStyle.mSymbol} alt=".." src={multyplysymbol}></img>
      </NavLink>

      <div className={storyStyle.center_div}>
        <div className={storyStyle.userImgandName}>
          <Avatar alt="..." src={avatarimg} />
          <h5>rdyhs{props.data.userName}</h5>
        </div>

        <div className={storyStyle.video}>
          <YouTube videoId="2g811Eo7K8U" opts={opts} />
        </div>

        <input
          type="text"
          className={storyStyle.replyField}
          placeholder="  Reply to ..."
        ></input>
      </div>
    </div>
  );
}
