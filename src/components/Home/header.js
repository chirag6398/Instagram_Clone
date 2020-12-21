import React from 'react';
import headerStyle from "../../styles/header.module.css";
import instaLogo from "../../images/instaLogo.png";
import homeIcon from "../../images/homeicon.png";
import heartIcon from "../../images/hearticon.png";
import arrowIcon from "../../images/arrow.png";
import avatarimg from "../../images/demoUserImg.jpg";
import compassIcon from "../../images/compass.png";
import { NavLink ,Link} from "react-router-dom";



export default function header() {
    return (
        <div className={headerStyle.ext_div}>
            <NavLink activeClassName={headerStyle.active} to="/"><img src={instaLogo} alt=".." /></NavLink>
            <input type="text" placeholder="Search" className={headerStyle.input} />
            <NavLink  className={headerStyle.hIcon} to="/"><img src={homeIcon} alt="..." className={headerStyle.hIcon} /></NavLink>
            <img src={arrowIcon} alt="..." className={headerStyle.arrIcon} />
            <img src={compassIcon} alt="..." className={headerStyle.cpsIcon} />
            <img src={heartIcon} alt="..." className={headerStyle.hrtIcon} />
            <img src={avatarimg} alt="..." className={headerStyle.userimg} />


        </div>
    )
}
