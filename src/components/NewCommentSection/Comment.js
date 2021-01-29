import React from "react";
import Header from "../Header";
import commentStyle from "../../styles/Comment.module.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useParams } from "react-router-dom";

export default function Comment(props) {
  const userName = useParams();

  return (
    <>
      <Header />
      <div className={commentStyle.ext_div}>
        <div className={commentStyle.center_div}>
          <Sidebar data={props.data} />
          {userName.userName ? <Chat userName={userName} /> : null}
        </div>
      </div>
    </>
  );
}
