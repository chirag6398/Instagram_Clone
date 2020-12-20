import React from 'react';
import headerStyle from "../styles/header.module.css";
import instaLogo from "../images/instaLogo.png";
import SearchIcon from '@material-ui/icons/Search';


export default function header() {
    return (
        <div className={headerStyle.ext_div}>
            <img src={instaLogo} alt=".." className={headerStyle.logo}/>
            <input type="text" placeholder="Search" className={headerStyle.input}/>
            
        </div>
    )
}
