import React from 'react';
import {NavLink} from "react-router-dom";
import avatarimg from "../../images/demoUserImg.jpg";
import storyStyle from "../../styles/story.module.css";
import logo from "../../images/instaStorylogo.png";
import multyplysymbol from "../../images/multiplyicon.png";

export default function Userstories(props) {
    return (
        <div className={storyStyle.ext_div}>
          <NavLink to="/"> <img className={storyStyle.logo} src={logo}></img></NavLink>
          <NavLink to="/"> <img className={storyStyle.mSymbol} src={multyplysymbol}></img></NavLink>
           
            <div className={storyStyle.center_div}>
            <img src={avatarimg} className={storyStyle.userimg}></img>
            <h5 className={storyStyle.username}>rdyhs{props.data.userName}</h5>
            <video className={storyStyle.video} src="../../videos/HP5.mkv" controls autoPlay></video>
            <input type="text" className={storyStyle.replyField} placeholder="  Reply to ..."></input>
            </div>
           
        </div>
    )
}



//   {
//                 props.data.map((val,i)=>{
//                     return <NavLink key={i} to="/story"><img src={val.avatarUrl} alt="..." className={storyStyle.userimg} /></NavLink>
//                 })
//             } 