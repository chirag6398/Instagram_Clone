import React from "react";
import sidebarchatStyle from "../../styles/sidebarChat.module.css";
import { Avatar } from "@material-ui/core";

export default function Sidebarchat(props) {
  return (
    <div className={sidebarchatStyle.container}>
      {props.data.map((val, i) => {
        return (
          <div key={i} className={sidebarchatStyle.sidebarchat_info}>
            <Avatar src={val.avatarUrl} />
            <h3>{val.userName}</h3>
          </div>
        );
      })}
    </div>
  );
}
