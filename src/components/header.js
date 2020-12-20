import React from 'react';
import headerStyle from "../styles/header.module.css";
import instaLogo from "../images/instaLogo.png";



export default function header() {
    return (
        <div className={headerStyle.ext_div}>
            <img src={instaLogo} alt=".."/>
            
        </div>
    )
}
