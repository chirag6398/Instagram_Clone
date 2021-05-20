import React from "react";
import "../styles/dropdown.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import SwapHorizOutlinedIcon from "@material-ui/icons/SwapHorizOutlined";
import { useHistory } from "react-router-dom";
export default function Dropdown() {
  const history = useHistory();
  const logoutHandler = async () => {
    try {
      var isLogout = window.confirm("You will logout from your device");
      if (isLogout) {
        const res = await fetch("/api/logout", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        console.log(res);
        const data = await res.json();
        if (data.status === 401) {
          console.log(data);
        } else {
          history.push("/login");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const LoginHandler = () => {
    history.push("/login");
  };
  return (
    <div className="dropdown__extDiv">
      <div className="dropdown__uparrow">
        <ArrowDropUpIcon />
      </div>
      <div className="dropdown__menu1">
        <div className="dropdown__menuRow">
          <AccountCircleOutlinedIcon />
          <span>Profile</span>
        </div>
        <div className="dropdown__menuRow">
          <BookmarkBorderOutlinedIcon />
          <span>Saved</span>
        </div>
        <div className="dropdown__menuRow">
          <SettingsOutlinedIcon />
          <span>Setting</span>
        </div>
        <div className="dropdown__menuRow">
          <SwapHorizOutlinedIcon />
          <span>Switch Account</span>
        </div>
      </div>
      <div className="dropdown__line"></div>
      <div className="dropdown__menuRow" onClick={LoginHandler}>
        <span>Log in</span>
      </div>
      <div className="dropdown__menuRow" onClick={logoutHandler}>
        <span>log out</span>
      </div>
    </div>
  );
}
