import React from 'react';
import Post from "./Post";
import homeStyle from "../../styles/home.module.css";
import avatarimg from "../../images/demoUserImg.jpg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import UserStory from "../StoryHeader/Userstories";
import Header from "../header"

export default function Home(props) {


  return (<>
    <div>
    <Header />
      <div className={homeStyle.storySection}>

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <NavLink to="/story"><img src={avatarimg} alt="..." className={homeStyle.userimg} /></NavLink>
              <NavLink to="/story"><img src={avatarimg} alt="..." className={homeStyle.userimg} /></NavLink>
              <NavLink to="/story">  <img src={avatarimg} alt="..." className={homeStyle.userimg} /></NavLink>
              <img src={avatarimg} alt="..." className={homeStyle.userimg} />
              <img src={avatarimg} alt="..." className={homeStyle.userimg} />
              <img src={avatarimg} alt="..." className={homeStyle.userimg} />
              <img src={avatarimg} alt="..." className={homeStyle.userimg} />

            </div>
            <div className="carousel-item">
              <img src={avatarimg} alt="..." className={homeStyle.userimg} />
              <img src={avatarimg} alt="..." className={homeStyle.userimg} />
              <img src={avatarimg} alt="..." className={homeStyle.userimg} />
              <img src={avatarimg} alt="..." className={homeStyle.userimg} />
              <img src={avatarimg} alt="..." className={homeStyle.userimg} />
              <img src={avatarimg} alt="..." className={homeStyle.userimg} />
              <img src={avatarimg} alt="..." className={homeStyle.userimg} />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={avatarimg} alt="Third slide" className={homeStyle.userimg} />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
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

  </>)
}
