import React from "react";
import sidebarStyle from "../../styles/sidebar.module.css";
import { IconButton } from "@material-ui/core";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import Sidebarchats from "./Sidebarchat";
export default function Sidebar(props) {
  return (
    <div className={sidebarStyle.sidebar}>
      <div className={sidebarStyle.sidebar_header}>
        <p> UserName</p>
        <div className={sidebarStyle.headerRight}>
          <IconButton>
            <FindInPageIcon />
          </IconButton>
        </div>
      </div>
      {/* 
      <div className={sidebarStyle.sidebar_searchBar}>
        <div className={sidebarStyle.searchContainer}>
          <input type="taxt" placeholder="search or start new chat" />
        </div>
      </div> */}
      <div className={sidebarStyle.sidebar_chats}>
        <Sidebarchats data={props.data} />
      </div>
    </div>
  );
}
