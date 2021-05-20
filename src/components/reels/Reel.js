import React from "react";
import "../../styles/reel.css";
import demoImg from "../../images/demoUserImg.jpg";
export default function Reel() {
  return (
    <div className="reel__container">
      <div className="reel__maindiv">
        <img src={demoImg} alt=".."></img>
        {/* <video src="" loop className="reel__video" /> */}
      </div>
    </div>
  );
}
