import React from "react";
import Post from "./Post";
import homeStyle from "../../styles/home.module.css";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import storyimg from "../../images/storyimg.jpg";
import Sugestion from "./Sugetion";
// import { TweenMax, Power3 } from "gsap";

export default function Home(props) {
  // var divRef = useRef(null);
  // useEffect(() => {
  //   TweenMax.from(divRef, 1, { x: -12000, duration: 2, ease: Power3.easeOut });ref={(el) => (divRef = el)}
  // });
  return (
    <>
      <div>
        <Header user={props.LoginUser} />
        <div className={homeStyle.home_extdiv} style={{ display: "flex" }}>
          <div className={homeStyle.container}>
            <div className={homeStyle.storySection}>
              {props.post.map((val, i) => {
                return (
                  <div key={i} className={homeStyle.userStoryImg}>
                    <NavLink to="/story">
                      <img
                        alt="..."
                        src={storyimg}
                        className={homeStyle.storyImg}
                      />
                    </NavLink>
                  </div>
                );
              })}
            </div>
            {props.post.map((val, i) => {
              return (
                <Post
                  key={i}
                  userimg={val.posturl}
                  avatarimg={val.avatarUrl}
                  caption={val.postCaption}
                  username={val.userName}
                />
              );
            })}
          </div>
          <div className={homeStyle.home_sugestionPortion}>
            <Sugestion user={props.LoginUser} />
          </div>
        </div>
      </div>
    </>
  );
}
