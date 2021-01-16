import { Avatar } from "@material-ui/core";
import React from "react";
import sugestionStyle from "../../styles/sugestion.module.css";
import avatarimg from "../../images/demoUserImg.jpg";
import duserImg from "../../images/storyimg.jpg";
export default function Sugetion({ user }) {
  return (
    <div className={sugestionStyle.sugestion_container}>
      <div className={sugestionStyle.sugestion_userSection}>
        <Avatar alt="..." src={avatarimg} />
        <div className={sugestionStyle.user_follow_style}>
          <p>{user ? <span>{user}</span> : "chirag112_agrawal"}</p>
          <p style={{ color: "blue", fontWeight: "600" }}>Switch</p>
        </div>
      </div>
      <b style={{ color: "gray" }}>suggestions for you</b>
      <b style={{ marginLeft: "30px" }}>see all</b>
      <div className={sugestionStyle.sugestion_userSection}>
        <Avatar alt="..." src={duserImg} />
        <div className={sugestionStyle.user_follow_style}>
          <p>user_name</p>
          <p style={{ color: "blue", fontWeight: "600" }}>Follow</p>
        </div>
      </div>
      <div className={sugestionStyle.sugestion_userSection}>
        <Avatar alt="..." src={duserImg} />
        <div className={sugestionStyle.user_follow_style}>
          <p>user_name</p>
          <p style={{ color: "blue", fontWeight: "600" }}>Follow</p>
        </div>
      </div>
      <div className={sugestionStyle.sugestion_userSection}>
        <Avatar alt="..." src={duserImg} />
        <div className={sugestionStyle.user_follow_style}>
          <p>user_name</p>
          <p style={{ color: "blue", fontWeight: "600" }}>Follow</p>
        </div>
      </div>
      <div className={sugestionStyle.sugestion_userSection}>
        <Avatar alt="..." src={duserImg} />
        <div className={sugestionStyle.user_follow_style}>
          <p>user_name</p>
          <p style={{ color: "blue", fontWeight: "600" }}>Follow</p>
        </div>
      </div>
    </div>
  );
}
