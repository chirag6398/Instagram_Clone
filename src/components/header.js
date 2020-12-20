import React from 'react';
import headerStyle from "../styles/header.module.css";
import instaLogo from "../images/instaLogo.png";
import homeIcon from "../images/homeicon.png";
import heartIcon from "../images/hearticon.png";
import arrowIcon from "../images/arrow.png";
import avatarimg from "../images/demoUserImg.jpg";
import compassIcon from "../images/compass.png";



export default function header() {
    return (
        <div className={headerStyle.ext_div}>
            <img src={instaLogo} alt=".." className={headerStyle.logo}/>
            <input type="text" placeholder="Search" className={headerStyle.input}/>
            <img src={homeIcon} alt="..." className={headerStyle.hIcon}/>
            <img src={arrowIcon} alt="..." className={headerStyle.arrIcon}/>
            <img src={compassIcon} alt="..." className={headerStyle.cpsIcon}/>
            <img src={heartIcon} alt="..." className={headerStyle.hrtIcon}/>
            <img src={avatarimg} alt="..." className={headerStyle.userimg}/>
          

        </div>
    )
}
