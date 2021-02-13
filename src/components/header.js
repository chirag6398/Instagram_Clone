import React from "react";
import headerStyle from "../styles/header.module.css";
import instaLogo from "../images/instaLogo.png";

import avatarimg from "../images/demoUserImg.jpg";

import { NavLink, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { auth } from "../firebase/firebase";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";

export default function Header(props) {
  const history = useHistory();
  const logoutHandler = () => {
    if (props) {
      alert("You will we logout and need to signIn again");
      auth
        .signOut()
        .then(() => {
          history.push("/login");
        })
        .catch((err) => {});
    } else {
      history.push("/login");
    }
  };
  return (
    <div className={headerStyle.ext_div}>
      <div className={headerStyle.header__logo}>
        <NavLink activeClassName={headerStyle.active} to="/">
          <img src={instaLogo} alt=".." />
        </NavLink>
      </div>

      <div className={headerStyle.header__input}>
        <SearchIcon
          style={{ color: "gray", position: "relative", left: "89px" }}
        />
        <input type="text" placeholder="Search" className={headerStyle.input} />
      </div>

      <div className={headerStyle.links}>
        <NavLink className={headerStyle.hIcon} to="/">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </NavLink>
        <NavLink to="/comment">
          <IconButton>
            <TelegramIcon />
          </IconButton>
        </NavLink>
        <IconButton>
          <ExploreIcon />
        </IconButton>
        <IconButton>
          <FavoriteIcon />
        </IconButton>

        <Avatar
          alt="..."
          onClick={logoutHandler}
          style={{ cursor: "pointer" }}
          src={avatarimg}
        />
      </div>
    </div>
  );
}
