import React, { useEffect, useState } from "react";
import sidebarchatStyle from "../../styles/sidebarChat.module.css";
import { Avatar } from "@material-ui/core";

export default function Sidebarchat(props) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className={sidebarchatStyle.container}>
      <div className={sidebarchatStyle.sidebarchat_info}>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <h3>{props.userName}</h3>
      </div>
    </div>
  );
}