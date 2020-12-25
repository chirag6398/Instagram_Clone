import React from 'react';
import Post from "./Post";
import homeStyle from "../../styles/home.module.css";
import avatarimg from "../../images/demoUserImg.jpg";
import { NavLink } from "react-router-dom";
import Header from "../header";
import Avatar from "@material-ui/core/Avatar";

export default function Home(props) {


  return (<>
    <div>
      <Header />
      <div className={homeStyle.container}>


        <div className={homeStyle.storySection}>

        {
          props.post.map((val,i)=>{
            return <div key={i} className={homeStyle.userStoryImg}>
          <NavLink to="/story">  <Avatar  alt="..." src={avatarimg} /></NavLink>
            </div>
          })
        }
         
        </div>
        {
          props.post.map((val, i) => {
            return <Post key={i}
              userimg={val.posturl}
              avatarimg={val.avatarUrl}
              caption={val.postCaption}
              username={val.userName}
            />
          })
        }
      </div>
    </div>

  </>)
}
