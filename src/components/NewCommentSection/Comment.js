import React from "react";
import Header from "../Header";
import commentStyle from "../../styles/Comment.module.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

export default function Comment(props) {
  return (
    <>
      <Header />
      <div className={commentStyle.ext_div}>
        <div className={commentStyle.center_div}>
          <Sidebar data={props.data} />
          {/* <Chat /> */}
          {console.log(props)}
        </div>
      </div>
    </>
  );
}
