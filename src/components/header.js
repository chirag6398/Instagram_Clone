import React from "react";
import headerStyle from "../styles/header.module.css";
import instaLogo from "../images/instaLogo.png";
import homeIcon from "../images/homeicon.png";
import heartIcon from "../images/hearticon.png";
import arrowIcon from "../images/arrow.png";
import avatarimg from "../images/demoUserImg.jpg";
import compassIcon from "../images/compass.png";
import { NavLink, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { auth } from "../firebase/firebase";

export default function Header({ user }) {
  const history = useHistory();
  const logoutHandler = () => {
    if (user) {
      alert("You will we logout and need to signIn again");
      auth
        .signOut()
        .then(() => {
          // console.log("succ.. logout..");
          history.push("/login");
        })
        .catch((err) => {
          // console.log(err);
        });
    } else {
      history.push("/login");
    }
  };
  return (
    <div className={headerStyle.ext_div}>
      <NavLink activeClassName={headerStyle.active} to="/">
        <img src={instaLogo} alt=".." />
      </NavLink>
      <input type="text" placeholder="Search" className={headerStyle.input} />
      <div className={headerStyle.links}>
        <NavLink className={headerStyle.hIcon} to="/">
          <img src={homeIcon} alt="..." className={headerStyle.hIcon} />
        </NavLink>
        <NavLink to="/comment">
          <img src={arrowIcon} alt="..." className={headerStyle.arrIcon} />
        </NavLink>
        <img src={compassIcon} alt="..." className={headerStyle.cpsIcon} />
        <img src={heartIcon} alt="..." className={headerStyle.hrtIcon} />

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
